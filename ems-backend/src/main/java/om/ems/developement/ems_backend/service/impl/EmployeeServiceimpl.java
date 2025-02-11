package om.ems.developement.ems_backend.service.impl;
import java.util.*;
import java.util.stream.Collectors;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import om.ems.developement.ems_backend.dto.EmployeeDto;
import om.ems.developement.ems_backend.entity.Employee;
import om.ems.developement.ems_backend.exception.ResourceNofFoundException;
import om.ems.developement.ems_backend.mapper.EmployeeMapper;
import om.ems.developement.ems_backend.respository.EmployeeRespository;
import om.ems.developement.ems_backend.service.EmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor

public class EmployeeServiceimpl implements EmployeeService{

    private EmployeeRespository employeeRespository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRespository.save(employee);
        return EmployeeMapper.mapToEmpplyeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee empolyee = employeeRespository.findById(employeeId)
                .orElseThrow(() -> new ResourceNofFoundException("employee doestn't exits with this given id : " + employeeId));
        return EmployeeMapper.mapToEmpplyeeDto(empolyee);
    }

    @Override
    public List<EmployeeDto> getALLEmpolyees() {
        List<Employee> employees = employeeRespository.findAll();
        return employees.stream().map((employee) -> EmployeeMapper.mapToEmpplyeeDto(employee))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedemployee) {

        Employee employee = employeeRespository.findById(employeeId).orElseThrow(
                () -> new ResourceNofFoundException("Employee do not exist with this given ID " + employeeId)
        );

        employee.setFirstName(updatedemployee.getFirstName());
        employee.setLastName(updatedemployee.getLastName());
        employee.setEmail(updatedemployee.getEmail());

        Employee updatedEmployeeObj = employeeRespository.save(employee);

        return EmployeeMapper.mapToEmpplyeeDto(updatedEmployeeObj);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee = employeeRespository.findById(employeeId).orElseThrow(
                () -> new ResourceNofFoundException("Employee do not exist with this ID " + employeeId)
        );

        employeeRespository.deleteById(employeeId);
    }
}
