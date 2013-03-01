var myDate = new Date();
if ( myDate.getHours() < 12 ) 
{
document.write("Good Morning!");
}
else  /* Hour is from noon to 5pm (actually to 5:59 pm) */
if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 )
{
document.write("Good Afternoon!");
}
else  /* the hour is after 5pm, so it is between 6pm and midnight */
if ( myDate.getHours() > 17 && myDate.getHours() <= 24 )
{
document.write("Good Evening!");
}
