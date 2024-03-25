package br.com.ehmf.AppProdutos.configuration;

import org.springframework.web.servlet.config.annotation.CorsRegistry;

public class WebConfiguration {
	
		 public void addCorsMappings(CorsRegistry registry) {
		        registry.addMapping("/*").allowedMethods("");
		    }
	}


