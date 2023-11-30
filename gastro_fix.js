
//add values of selected to check boxes and display totals
function calcTotal()
{
   var min = 75;
   var item20 = 0;
   var item21 = 0;
   var item22 = 0;
   var item23 = 0;
   var item24 = 0;
   var item25 = 0;
   var item26 = 0;
   var item27 = 0;
   var item28 = 0;
   var item29 = 0;
   var item30 = 0;
   var item31 = 0;
   var item32 = 0;
   var item33 = 0;
   var item34 = 0;
   var item35 = 0;
   var item36 = 0;
   var item37 = 0;
   var items = document.getElementsByTagName("input");
   //js variable items for all HTML elements w the input tag

   for (var i = 0; i < 19; i++)
   {
      if (items[i].checked)//if the item is checked
      {
         if (i+1 == 1 || i+1 == 2 || i+1 == 4 || i+1 == 5)
         {
            item20 += (items[i].value / 4);
            //document.getElementById("total20").innerHTML = "Mencret : " + item20;
         }

         if (i+1 == 4 || i+1 == 5 || i+1 == 6)
         {
            item21 += (items[i].value / 3);
            //document.getElementById("total21").innerHTML = "Muntah : " + item21;
         }

         if (i+1 == 4 || i+1 == 7)
         {
            item22 += (items[i].value / 2);
            //document.getElementById("total22").innerHTML = "Sakit perut : " + item22;
         }

         if (i+1 == 4 || i+1 == 8 || i+1 == 9)
         {
            item23 += (items[i].value / 3);
            //document.getElementById("total23").innerHTML = "Darah rendah : " + item23;
         }

         if (i+1 == 8 || i+1 == 10)
         {
            item24 += (items[i].value / 2);
            //document.getElementById("total24").innerHTML = "Koma : " + item24;
         }

         if (i+1 == 4 || i+1 == 5 || i+1 == 9 || i+1 == 11)
         {
            item25 += (items[i].value / 4);
            //document.getElementById("total25").innerHTML = "Demam : " + item25;
         }

         if (i+1 == 4 || i+1 == 8 || i+1 == 11 || i+1 == 12)
         {
            item26 += (items[i].value / 4);
            //document.getElementById("total26").innerHTML = "Septicaemia : " + item26;
         }

         if (i+1 == 4 || i+1 == 13)
         {
            item27 += (items[i].value / 2);
            //document.getElementById("total27").innerHTML = "Lumpuh : " + item27;
         }

         if (i+1 == 1 || i+1 == 2 || i+1 == 3 || i+1 == 4 || i+1 == 5)
         {
            item28 += (items[i].value / 5);
            //document.getElementById("total28").innerHTML = "Mencret berdarah : " + item28;
         }
        
         if (i+1 == 14 || i+1 == 15)
         {
            item29 += (items[i].value / 2);
            //document.getElementById("total29").innerHTML = "Makan daging : " + item29;
         }

         if (i+1 == 14 || i+1 == 16)
         {
            item30 += (items[i].value / 2);
            //document.getElementById("total30").innerHTML = "Makan jamur : " + item30;
         }

         if (i+1 == 14 || i+1 == 17)
         {
            item31 += (items[i].value / 2);
            //document.getElementById("total31").innerHTML = "Makan makanan kaleng : " + item31;
         }

         if (i+1 == 18 || i+1 == 19)
         {
            item32 += (items[i].value / 2);
            //document.getElementById("total32").innerHTML = "Minum susu : " + item32;
         }

         item33 = Math.round((item20 + item21 + item22 + item23 + item29) / 5 * 100);
         document.getElementById("total33").innerHTML = "Keracunan Staphylococcus aureus : " + item33 + "%";

         item34 = Math.round((item20 + item21 + item22 + item24 + item30) / 5 * 100);
         document.getElementById("total34").innerHTML = "Keracunan jamur beracun : " + item34 + "%";

         item35 = Math.round((item20 + item21 + item22 + item25 + item26 + item29) / 6 * 100);
         document.getElementById("total35").innerHTML = "Keracunan Salmonellae : " + item35 + "%";

         item36 = Math.round((item21 + item27 + item31) / 3 * 100);
         document.getElementById("total36").innerHTML = "Keracunan Clostridium botulinum : " + item36 + "%";

         item37 = Math.round((item22 + item25 + item28 + item32) / 4 * 100);
         document.getElementById("total37").innerHTML = "Keracunan Campylobacter : " + item37 + "%";         
       }        
   }

   largest = Math.max(item33, item34, item35, item36, item37);
   {
      if (largest == item33)
      {
          document.getElementById("total33").innerHTML = "(Persen tertinggi) Keracunan Staphylococcus aureus : " + item33 + "%";
          if (item33 < threshold.value)
          {
            document.getElementById("status2").innerHTML = "Persen tertinggi kurang dari " + threshold.value + "%, anda dianggap sehat!";
          }
          else
          {
            document.getElementById("status2").innerHTML = "Anda keracunan Staphylococcus aureus";
          }
      } 
      if (largest == item34) 
      {
          document.getElementById("total34").innerHTML = "(Persen tertinggi) Keracunan jamur beracun : " + item34 + "%";
          if (item34 < threshold.value)
          {
            document.getElementById("status2").innerHTML = "Persen tertinggi kurang dari " + threshold.value + "%, anda dianggap sehat!";
          }
          else
          {
            document.getElementById("status2").innerHTML = "Anda keracunan jamur beracun";
          }
      } 
      if (largest == item35)
      {
          document.getElementById("total35").innerHTML = "(Persen tertinggi) Keracunan Salmonellae : " + item35 + "%";
          if (item35 < threshold.value)
          {
            document.getElementById("status2").innerHTML = "Persen tertinggi kurang dari " + threshold.value + "%, anda dianggap sehat!";
          }
          else
          {
            document.getElementById("status2").innerHTML = "Anda keracunan Salmonellae";
          }
      }
      if (largest == item36)
      {
          document.getElementById("total36").innerHTML = "(Persen tertinggi) Keracunan Clostridium botulinum : " + item36 + "%";
          if (item36 < threshold.value)
          {
         document.getElementById("status2").innerHTML = "Persen tertinggi kurang dari " + threshold.value + "%, anda dianggap sehat!";
          }
          else
          {
            document.getElementById("status2").innerHTML = "Anda keracunan Clostridium botulinum";
          }
      }
      if (largest == item37)
      {
          document.getElementById("total37").innerHTML = "(Persen tertinggi) Keracunan Campylobacter : " + item37 + "%";
          if (item37 < threshold.value)
          {
            document.getElementById("status2").innerHTML = "Persen tertinggi kurang dari " + threshold.value + "%, anda dianggap sehat!";
          }
          else
          {
            document.getElementById("status2").innerHTML = "Anda keracunan Campylobacter";
          }
      }
   }       
}
 
//backwards compatibility for event listener submit button
var calcButton = document.getElementById("calcButton"); //sButton HTML element is assign JS value of submitButton
if (calcButton.addEventListener) //now you can add event listener
{
  calcButton.addEventListener("click", calcTotal, false); //event is click, action is calctotal, false for bwc
}
else if (calcButton.attachEvent)
 {
   calcButton.attachEvent("onclick", calcTotal);   
}
