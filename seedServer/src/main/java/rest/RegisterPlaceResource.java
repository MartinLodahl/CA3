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
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
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
     public static final String FILE_LOCATION = "/Users/pravien/Documents/CPH-Business/3\\ Semester/3\\ modul/CA3/CA3/seedServer/img/";

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of RegisterPlaceResource
     */
    public RegisterPlaceResource() {
    }

    /**
     * Retrieves representation of an instance of rest.RegisterPlaceResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
    }

    /**
     * PUT method for updating or creating an instance of RegisterPlaceResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
    
  @POST
  @Path("/file")
  @Consumes(MediaType.MULTIPART_FORM_DATA)
  @Produces(MediaType.APPLICATION_JSON)
  public Response uploadFile(@DefaultValue("") 
          @FormDataParam("place") String place,
          @FormDataParam("file") InputStream file, 
          @FormDataParam("file") FormDataContentDisposition fileDisposition) throws IOException {
    System.out.println("Just to show how to send additonal data: "+place);
    String fileName = fileDisposition.getFileName();
    String location = saveFile(file, fileName);
    Place newPlace = new Gson().fromJson(place, Place.class);
    Image img = new Image(location);
    newPlace.addImage(img);
    String status = "{\"status\":\"uploaded\"}";
    return Response.ok(status).build();
  }

  private String saveFile(InputStream is, String fileLocation) throws IOException {
    String location = FILE_LOCATION + fileLocation;
    try (OutputStream os = new FileOutputStream(new File(location))) {
      byte[] buffer = new byte[256];
      int bytes = 0;
      while ((bytes = is.read(buffer)) != -1) {
        os.write(buffer, 0, bytes);
      }
    }
    return location;
  }
}
