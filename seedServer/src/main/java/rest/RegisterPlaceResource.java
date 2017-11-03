/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import entity.Image;
import java.io.File;
import entity.Place;
import facades.PlaceFacade;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

/**
 * REST Web Service
 *
 * @author pravien
 */
@Path("registerPlace")
public class RegisterPlaceResource {

    public static final String FILE_LOCATION = "C:\\Users\\MartinLodahl\\Documents\\NetBeansProjects\\3rd semester\\React - Seed\\seedServer\\image\\";
    

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of RegisterPlaceResource
     */
    public RegisterPlaceResource() {
        
    }

    @Path("/file")
    @POST
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public Response uploadFile(@DefaultValue("") @FormDataParam("place") String place,
            @FormDataParam("file") InputStream file,
            @FormDataParam("file") FormDataContentDisposition fileDisposition) throws IOException {
        System.out.println("Just to show how to send additonal data: " + place);
        Place p = new Gson().fromJson(place, Place.class);
        System.out.println("Just to show how to send additonal data: " + p.toString());
        String fileName = fileDisposition.getFileName();
        String location = FILE_LOCATION + fileName;
        Image img = new Image(location);
        p.getImages().add(img);
        saveFile(file, location);
        
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu_development");
        PlaceFacade pF = new PlaceFacade(emf);
        System.out.println("going to create place");
        pF.createPlace(p);        
      
        String status = "{\"status\":\"uploaded\"}";
        return Response.ok(status).build();
    }

    private void saveFile(InputStream is, String fileLocation) throws IOException {
        try (OutputStream os = new FileOutputStream(new File(fileLocation))) {
            byte[] buffer = new byte[256];
            int bytes = 0;
            while ((bytes = is.read(buffer)) != -1) {
                os.write(buffer, 0, bytes);
            }
        }
    }
}
