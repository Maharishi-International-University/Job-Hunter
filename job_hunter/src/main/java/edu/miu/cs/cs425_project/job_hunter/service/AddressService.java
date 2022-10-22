package edu.miu.cs.cs425_project.job_hunter.service;


import edu.miu.cs.cs425_project.job_hunter.model.Address;
import edu.miu.cs.cs425_project.job_hunter.model.Job_Seeker;

import java.util.List;

public interface AddressService {
     List<Address> getAllAddresses();
    Address getAddressBy_Id(Long address_Id);
    Address addNewAddress(Address address);
    Address updateAddress(Long address_Id, Address address);
    void deleteAddressById(Long address_Id);
}
