    function showMenu () {   
        
        let nav=document.getElementById("navi");
        
        if (nav.style.display==="none") {
            nav.style.display="block";
        }
        else {
            nav.style.display="none";
        }

    }

    // let nav = document.getElementById("nav-info")
    // let menu = document.getElementById("menu-btn")

    // document.getElementById("menu-btn").onclick = function () {
    //     if (nav.style.display="none") {
    //         nav.style=display="block";
    //     }
    //     else {
    //         nav.style.display="none";
    //     }
    // }

    let formMenu=document.getElementById("formulir");
    formMenu.style.display="none";
    
    function showForm () {
        if (formMenu.style.display==="none") {
            formMenu.style.display="block";
        }
        else {
            formMenu.style.display="none";
        }

        let nama=document.getElementById("pName").innerHTML;
        document.getElementById("inName").value=nama;

        let role=document.getElementById("pRole").innerHTML;
        document.getElementById("inRole").value=role;

        let ava=document.getElementById("pAva").innerHTML;
        document.getElementById("inAva").value=ava;

        let age=document.getElementById("pAge").innerHTML;
        document.getElementById("inAge").value=age;

        let loc=document.getElementById("pLoc").innerHTML;
        document.getElementById("inLoc").value=loc;

        let exp=document.getElementById("pExp").innerHTML;
        document.getElementById("inExp").value=exp;

        let mail=document.getElementById("pMail").innerHTML;
        document.getElementById("inMail").value=mail;

    }

    function simpanForm () {
        formMenu.style.display="none";
        
        let nama=document.getElementById("inName").value;
        document.getElementById("pName").innerHTML=nama;
        
        let role=document.getElementById("inRole").value;
        document.getElementById("pRole").innerHTML=role;

        let ava=document.getElementById("inAva").value;
        document.getElementById("pAva").innerHTML=ava;

        let age=document.getElementById("inAge").value;
        document.getElementById("pAge").innerHTML=age;

        let loc=document.getElementById("inLoc").value;
        document.getElementById("pLoc").innerHTML=loc;

        let exp=document.getElementById("inExp").value;
        document.getElementById("pExp").innerHTML=exp;

        let mail=document.getElementById("inMail").value;
        document.getElementById("pMail").innerHTML=mail;
    }