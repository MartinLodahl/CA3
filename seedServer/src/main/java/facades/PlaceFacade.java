/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import com.google.gson.Gson;
import entity.Place;
import entity.Rating;
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
        } catch (Exception e) {
            return "failedUnspecified";
        }
    }

    public List<Place> getAllPlaceses() {
        EntityManager em = getEntityManager();
        List<Place> tempList = new ArrayList();
        try {
            System.out.println("before");
            Query query = em.createQuery("SELECT e FROM SEED_PLACE e");
            tempList = query.getResultList();
            System.out.println("templist" + tempList);
            return tempList;
        } catch (Exception e) {
            System.out.println("ERROR getAllPLACESES# could not fetch all placeses from databse");
        } finally {
            em.close();
        }
        return null;
    }

    public Long doZipExist(String zip) {
        EntityManager em = getEntityManager();

        try {
//                query="SELECT c FROM Customer c WHERE c.name LIKE :custName"

            Query query = em.createQuery("SELECT z.id FROM Zip z where z.zip =:zip");
            query.setParameter("zip", zip);
            List<Long> tempList = query.getResultList();
            if (tempList.size() == 1) {
                Long s = tempList.get(0);
                System.out.println("return s: " + s);
                return s;
            }
            return null;
        } finally {
            em.close();
        }
    }

    public void ratePlace(int rate, Long id) {
        EntityManager em = getEntityManager();
        List<Place> tempList;
        try {
            Query query = em.createQuery("SELECT e FROM SEED_PLACE e where e.id =:id");
            query.setParameter("id", id);
            tempList = query.getResultList();
            Rating rating = tempList.get(0).getRating();
            int amount = rating.getAmount();
            double star = rating.getStars();
            System.out.println(rating.getId());
            double newStars = ((amount*star)+rate)/(amount+1);
            rating.setAmount(amount+1);
            rating.setStars(newStars);
            
            em.getTransaction().begin();
            System.out.println("we merge now");
            em.merge(rating);
            em.getTransaction().commit();
                        
        } catch (Exception e) {
            System.out.println("Rating error");
        } finally {
            em.close();
        }
    }
}
