package security;

import entity.User;
import java.util.Collection;
import java.util.List;

/**
 *
 * @author lam
 */
public interface IUserFacade {

    /*
    Return the Roles if users could be authenticated, otherwise null
     */
    List<String> authenticateUser(String userName, String password);
    List<IUser> getAllUsers();
    IUser getUserByUserId(String id);
    String createUser (String username, String password);
    
}
