import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-notiziario',
  templateUrl: './notiziario.component.html',
  styleUrls: ['./notiziario.component.css']
})
export class NotiziarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

 

$.ajax(
	{
		type: "GET",
		url:"https://newsapi.org/v2/everything?q=arresti&apiKey=d5d2bc4d03124039a07f2ba6ad7a298e",
		data: "html",
		success: function(data)
		{
			for (var i=0; i<10; i++) {
				$("table").append("<tr>"+ "<td>" + data.articles[i].author + "</td>" + "<td>" + data.articles[i].title + "</td>" + "<td>" + data.articles[i].description + "</td>" + "</tr>")
		}

        $(function(){
        $("td").click(function(){
	    $(this).animate({fontSize: "24px"}, 3000);
	    });
        $("td").mouseout(function(){
	    $(this).animate({fontSize: "16px"}, 3000);

	    });

	    });

        $(function(){
        $("td").css('border-style', 'solid');
        $("td").css('border-color', 'grey');
        $("td").css('color', 'brown');
        });

         $(function(){
        $("td").mouseover(function(){
        $(this).css('background-color', 'black');
         $(this).css('color', 'white');
         });
          $("td").mouseout(function(){
        $(this).css('background-color', '#f4f0e8');
         $(this).css('color', 'brown');
         $(this).css('background-clip', 'content-box');
          $(this).css('padding', '10px')
         });

	    });


	},

	error: function (xhr){
			console.log("error")
		}
	});


	