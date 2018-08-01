<template>
    <div class="header">
    <div id="container" style="background-color:white;">
        <div class="column0" style="background-color:white;">
        </div>
        <div class="column0" style="background-color:white;">
            <a href="#" class="logo">
                OptimusProject
            </a>
        </div>
        <div class="column0" style="background-color:white;">
        </div>
    </div>
    <div id="mainmenu" style="background-color:white;">
        <div class="mainmenu1" style="background-color:white; margin:auto;">
            <ul class="mainmenu">
                <li><a class="active" href="#home">HOME</a></li>
                <li><a href="#Projects">PROJECTS</a></li>
                <li><a href="#Biography">ABOUT US</a></li>
                <li><a href="#Awards">NEWS</a></li>
                <li><a href="#footer">CONTACT</a></li>
            </ul>
        </div>
        <div id="spme" class="menubutton" style="background-color:#3a3a3a">
            <span  class="spmen" style="color:white;cursor:pointer;position:absolute;right:20px;" onclick="openNav()">&#9776;</span>    <!-- ikona za menu -->
        </div>
    </div>
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="#">HOME</a>
        <a href="#">PROJECTS</a>
        <a href="#">ABOUT US</a>
        <a href="#">NEWS</a>
        <a href="#">CONTACT</a>
    </div>
    </div>
</template>
