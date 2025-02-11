package om.ems.developement.ems_backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNofFoundException extends RuntimeException{

    public ResourceNofFoundException(String message){
        super(message);
    }

}
