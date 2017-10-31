/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import java.io.Serializable;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

/**
 *
 * @author pravien
 */
@Entity(name = "SEED_ADDRESS")
public class Address implements Serializable {
    
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(length = 255,name = "_STREET",nullable = false)
    private String street;
    @OneToOne
    private Zip zip;
    @OneToOne(mappedBy = "address")
    private Place place;

    public Address() {
    }

    public Address(String street, Zip zip) {
        this.street = street;
        this.zip = zip;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 53 * hash + Objects.hashCode(this.street);
        hash = 53 * hash + Objects.hashCode(this.zip);
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
        final Address other = (Address) obj;
        if (!Objects.equals(this.street, other.street)) {
            return false;
        }
        if (!Objects.equals(this.zip, other.zip)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Address{" + "street=" + street + ", zip=" + zip +'}';
    }
    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public Zip getZip() {
        return zip;
    }

    public void setZip(Zip zip) {
        this.zip = zip;
    }
}
