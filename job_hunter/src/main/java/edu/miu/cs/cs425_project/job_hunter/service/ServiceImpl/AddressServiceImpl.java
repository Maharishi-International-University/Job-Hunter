package edu.miu.cs.cs425_project.job_hunter.service.ServiceImpl;

import edu.miu.cs.cs425_project.job_hunter.model.Address;
import edu.miu.cs.cs425_project.job_hunter.repository.AddressRepository;
import edu.miu.cs.cs425_project.job_hunter.service.AddressService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AddressServiceImpl  implements AddressService {

    private AddressRepository addressRepo;
    @Override
    public List<Address> getAllAddresses() {
        return  addressRepo.findAll();
    }

    @Override
    public Address getAddressBy_Id(Long address_Id) {
        return addressRepo.findById(address_Id).orElse(null);
    }

    @Override
    public Address addNewAddress(Address address) {
        return  addressRepo.save(address);
    }

    @Override
    public Address updateAddress(Long address_Id, Address address) {
        var address1 = addressRepo.findById(address_Id).orElse(null);
        if(address1 !=null){
            address1.setCity(address.getCity());
            addressRepo.save(address1);
        }
        return address1 ;
    }

    @Override
    public void deleteAddressById(Long address_Id) {
   addressRepo.deleteById(address_Id);
    }
}

