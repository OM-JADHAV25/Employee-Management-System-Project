package om.ems.developement.ems_backend.mapper;

import om.ems.developement.ems_backend.dto.EmployeeDto;
import om.ems.developement.ems_backend.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDto mapToEmpplyeeDto(Employee employee){
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }

}
