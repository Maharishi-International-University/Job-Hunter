//package edu.miu.cs.cs425_project.job_hunter.advice;
//
//import edu.miu.cs.cs425_project.job_hunter.exception.MyException;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.bind.annotation.ExceptionHandler;
//import org.springframework.web.bind.annotation.ResponseStatus;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.bind.annotation.RestControllerAdvice;
//
//import java.util.HashMap;
//import java.util.Map;
//
//@RestControllerAdvice
//public class JobHunterWebAPIExceptionHandler {
//
//    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
//    @ExceptionHandler(MyException.class)
//    public Map<String, String> handlerNotFoundException(MyException myException){
//        Map<String, String> errorHandler = new HashMap<>();
//        errorHandler.put("Error Message", myException.getMessage());
//        return errorHandler;
//    }
//}
