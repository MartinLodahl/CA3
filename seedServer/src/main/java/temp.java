
import javax.persistence.EntityManager;
import javax.persistence.Persistence;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author pravien
 */
public class temp {
    
    public static void main(String[] args) {
            EntityManager em = Persistence.createEntityManagerFactory("pu_development").createEntityManager();
    }
}
