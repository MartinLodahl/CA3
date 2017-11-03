/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import com.google.gson.Gson;
import entity.Place;
import entity.Role;
import entity.User;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import security.IUser;
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
    
    public List<Place> getAllPlaceses(){
          EntityManager em = getEntityManager();
          List<Place> tempList = new ArrayList();
          try {
            System.out.println("before");
            Query query = em.createQuery("SELECT e FROM SEED_PLACE e");
            tempList=query.getResultList();
             System.out.println("templist"+tempList);
            return tempList;
        }catch(Exception e){
              System.out.println("ERROR getAllPLACESES# could not fetch all placeses from databse");
        }finally {
            em.close();
        }
          return null;
    }
}
