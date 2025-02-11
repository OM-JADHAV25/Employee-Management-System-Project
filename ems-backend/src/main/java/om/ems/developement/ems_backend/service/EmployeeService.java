package om.ems.developement.ems_backend.service;
import java.util.*;
import om.ems.developement.ems_backend.dto.EmployeeDto;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getALLEmpolyees();

    EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedemployee);

    void deleteEmployee(Long employeeId);
}
