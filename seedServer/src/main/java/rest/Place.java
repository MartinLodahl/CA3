/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import entity.Address;
import facades.PlaceFacade;
import javax.annotation.security.RolesAllowed;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author pravien
 */
@Path("place")
public class Place {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of GenericResource
     */
    public Place() {
    }

    /**
     * Retrieves representation of an instance of rest.GenericResource
     * @return an instance of java.lang.String
     */
    @Path("/all")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getAllPlaceses() {
        System.out.println("hej");
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu_development");
        PlaceFacade pF = new PlaceFacade(emf);
        //TODO return proper representation object
        try{            
        return new Gson().toJson(pF.getAllPlaceses());
        }catch(Exception e){
            return "could not fetch places";
        }
    }

    /**
     * PUT method for updating or creating an instance of GenericResource
     * @param content representation for the resource
     */
    @RolesAllowed("User")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void addPlace(String content) {
        entity.Place p  = new Gson().fromJson(content,entity.Place.class);
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu_development");
        PlaceFacade pF = new PlaceFacade(emf);
        pF.createPlace(p);
    }
    
     
    @POST
    @Path("/rate")
    @Consumes(MediaType.APPLICATION_JSON)
    public void ratePlace(String content) {
//        rate:placeId; Skal hives ud af Json
        JsonObject jo = new Gson().fromJson(content, JsonObject.class);
        JsonElement ratingJE = jo.get("rate");
        int ratingLong = ratingJE.getAsInt();
        JsonElement placeIdJE = jo.get("placeId");
        long placeIdLong = placeIdJE.getAsLong();
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu_development");
        PlaceFacade pF = new PlaceFacade(emf);
        pF.ratePlace(ratingLong, placeIdLong);
    }
}
