package facades;

import entity.Role;
import security.IUserFacade;
import entity.User;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import javax.ws.rs.NotAuthorizedException;
import javax.ws.rs.core.Response;
import security.IUser;
import security.PasswordStorage;

public class UserFacade implements IUserFacade {

    EntityManagerFactory emf;

    public UserFacade(EntityManagerFactory emf) {
        this.emf = emf;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    @Override
    public IUser getUserByUserId(String id) {
        EntityManager em = getEntityManager();
        try {
            return em.find(User.class, id);
        } finally {
            em.close();
        }
    }

    public List<IUser> getAllUsers() {
        EntityManager em = getEntityManager();
        try {
            Query query = em.createQuery("SELECT e FROM SEED_USER e");
            return (List<IUser>) query.getResultList();
        } finally {
            em.close();
        }
    }


    /*
  Return the Roles if users could be authenticated, otherwise null
     */
    @Override
    public List<String> authenticateUser(String userName, String password) {
        try {
            System.out.println("User Before:" + userName + ", " + password);
            IUser user = getUserByUserId(userName);
            System.out.println("User After:" + user.getUserName() + ", " + user.getPasswordHash());
            return user != null && PasswordStorage.verifyPassword(password, user.getPasswordHash()) ? user.getRolesAsStrings() : null;
        } catch (PasswordStorage.CannotPerformOperationException | PasswordStorage.InvalidHashException ex) {
            throw new NotAuthorizedException("Invalid username or password", Response.Status.FORBIDDEN);
        }
    }

    /*
  Creates a new user
    Returns usernameTaken if username is taken, added if added and failedUnspecified if none of the 2 before mentioned happens.
     */
    @Override
    public String createUser(String userName, String password) {
        System.out.println("User :" + userName + ", " + password);
        if (getUserByUserId(userName) != null) {
            return "usernameTaken";
        } else {
            try {  
                EntityManager em = getEntityManager();
                try {
                    em.getTransaction().begin();
                    User user = new User(userName, password);
                    Role userRole = new Role("User");
                    user.addRole(userRole);
                    em.persist(user);
                    em.getTransaction().commit();
                } finally {
                    em.close();
                }
                return "added";
            } catch (PasswordStorage.CannotPerformOperationException ex) {
                Logger.getLogger(UserFacade.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return "failedUnspecified";
    }

}
