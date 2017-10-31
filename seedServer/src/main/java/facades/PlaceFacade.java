/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import entity.Place;
import entity.Role;
import entity.User;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import security.PasswordStorage;

/**
 *
 * @author pravien
 */
public class PlaceFacade {
    
     EntityManagerFactory emf;

    public PlaceFacade(EntityManagerFactory emf) {
        this.emf = emf;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }
    
    
    public String createPlace(Place p) {
            try {  
                EntityManager em = getEntityManager();
                try {
                    em.getTransaction().begin();
                    em.persist(p);
                    em.getTransaction().commit();
                } finally {
                    em.close();
                }
                return "added";
            }catch(Exception e){
            return "failedUnspecified";
        }
    }
    
}
