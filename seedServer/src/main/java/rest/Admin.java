package rest;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import security.IUser;
import security.IUserFacade;
import security.UserFacadeFactory;

@Path("admin")
@RolesAllowed("Admin")
public class Admin {

    IUserFacade facade = UserFacadeFactory.getInstance();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getSomething() {
        String now = new SimpleDateFormat("MM-dd-yyyy HH:mm:ss").format(new Date());
        return "{\"message\" : \"Hello Admin from server (call accesible by only authenticated ADMINS)\",\n" + "\"serverTime\": \"" + now + "\"}";
    }

    @GET
    @Path("/users")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAllUsers() {
        try {
            String json = "{\"users\":[\"";
            List<IUser> users = facade.getAllUsers();
            for (int i = 0; i < users.size(); i++) {
                json += users.get(i).getUserName();
                if (i == users.size() - 1) {
                    json += "\"]}";
                } else {
                    json += "\",\"";
                }
            }
            System.out.println(json);
//            String json = new Gson().toJson(users);
            return json;
        } catch (Exception e) {
            System.out.println(e);
        }
        return null;
    }

}
