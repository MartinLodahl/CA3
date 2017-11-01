/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

/**
 *
 * @author pravien
 */
@Entity
public class Place implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    
    @OneToOne(cascade=CascadeType.PERSIST)
    private Rating rating;
    
    @OneToOne(cascade=CascadeType.PERSIST)
    private Gpslocation gps;
    @Column(length = 255,name = "_TITLE",nullable = false)
    private String title;
    @Column(length = 255,name = "_DESCRIPTION",nullable = false)
    private String description;
    
    
    @OneToOne(cascade=CascadeType.PERSIST)
    private Address address;
    
    
    @OneToMany(mappedBy = "place",cascade=CascadeType.PERSIST)
    private List<Image> images;

    public Place() {
    }

    public Place(Rating rating, Gpslocation gps, String title, String description, Address address, List<Image> images) {
        this.rating = rating;
        this.gps = gps;
        this.title = title;
        this.description = description;
        this.address = address;
        this.images = images;
    }
    

    public Rating getRating() {
        return rating;
    }

    public void setRating(Rating rating) {
        this.rating = rating;
    }
    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
    
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    } 

    public Gpslocation getGps() {
        return gps;
    }

    public void setGps(Gpslocation gps) {
        this.gps = gps;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 67 * hash + Objects.hashCode(this.id);
        hash = 67 * hash + Objects.hashCode(this.rating);
        hash = 67 * hash + Objects.hashCode(this.gps);
        hash = 67 * hash + Objects.hashCode(this.description);
        hash = 67 * hash + Objects.hashCode(this.address);
        hash = 67 * hash + Objects.hashCode(this.images);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Place other = (Place) obj;
        if (!Objects.equals(this.description, other.description)) {
            return false;
        }
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        if (!Objects.equals(this.rating, other.rating)) {
            return false;
        }
        if (!Objects.equals(this.gps, other.gps)) {
            return false;
        }
        if (!Objects.equals(this.address, other.address)) {
            return false;
        }
        if (!Objects.equals(this.images, other.images)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Place{" + "id=" + id + ", rating=" + rating + ", gps=" + gps + ", title=" + title + ", description=" + description + ", address=" + address + ", images=" + images + '}';
    }
}
