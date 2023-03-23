/*Auto
to dáš
Založte si HTML stránku s JavaScriptem.
Stáhněte si připravený obrázek auta. Vložte na stránku prvek img s tímto obrázkem.
Když uživatel stiskne šipku doprava, nastavte obrázku s autem CSS vlastnost margin-left, 
aby se auto pohnulo kousek doprava.
Při stisknutí šipky doleva nastavte obrázku s autem margin-left zpět na nulu.
*/
const autoPosun = (event)=>{
	if(event.code ==="ArrowRight"){
		event.target.classList.add("autoPosunRight");
	} else if(event.code ==="ArrowLeft"){
		event.target.classList.remove("autoPosunRight");
	}    
}
document.addEventListener("keyup",autoPosun)

/*
2
Přihlášení
to dáš
Vytvořte klasický přihlašovací formulář, do kterého uživatel zadá svůj e-mail a heslo a stránka
 ověří, zda má uživatel přístup do systému. Postupujte podle instrukcí níže.

Vytvořte stránku s formulářem, který bude mít jedno textové pole pro e-mail (typ email), jedno pole 
pro heslo (typ password) a tlačíto „Přihlásit“.
Na začátek souboru index.js vložte následující objekt představující jednoho uživatele. Budeme se
 tvářit, že jsme jej získali například z databáze.
const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}
Při kliknutí na tlačítko „Přihlásit“ ověřte, že uživatel zadal správné jméno a heslo. Pokud údaje
 souhlasí, nahraďte formulář na stránce nějakou zprávou, například „Přihlášený uživatel: Bartoloměj“.
Pokud uživatel zadal špatný e-mail nebo heslo, zobrazte ve formuláři výraznou zprávu „Neplatné 
přihlašovací údaje“. Zadaný e-mail nechte v políčku vyplněný. Vyplněné heslo naopak vymažte.
Všimněte si, že se snažíme dodržovat standardní praxi. Uživatel by neměl vědět, jestli zadal špatně
 heslo nebo e-mail. Nikdo by totiž neměl bý schopný zjistit, jestli v systému daný uživatel už 
 existuje. Zároveň je dobré špatné heslo z políčka vymazat, aby jej mohl uživatel rovnou zkusit
  napsat znovu.
*/
const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}
const frm = document.getElementById("registration");
const heslo = document.getElementById("heslo");
const email = document.getElementById("email");

frm.addEventListener("submit",(event)=>{ 
    event.preventDefault(); 
	if(email.value===user.email && heslo.value===user.password){		
		frm.textContent = `Přihlášený uživatel: ${user.name}`	
	}else{		
		frm.textContent = 'Neplatné přihlašovací údaje'	
	}    
    
})

/*
3
Newsletter, kontrola
to dáš
Pokračujte v příkladu Newsletter z lekce. V tomto cvičení zařidíme, aby uživatel při zadávání
 e-mailu dostal zpětnou vazbu, pokud zadává neplatný vstup.

V CSS si vytvořte třídu, která dělá výrazný červený rámeček kolem textového políčka.
Přidejte na textové políčko posluchač události input.
Během toho, jak uživatel píše, kontrolujte, jestli náhodou políčko není prázdné. V takovém případě 
na políčko přidejte třídu s červeným rámečkem. Pokud je vstup v pořádku, rámeček odeberte.
Zobrazte červený rámeček i v případě, že zadaný e-mail neobsahuje zavináč. K tomu můžete použít 
metodu indexOf nebo includes.
*/
const formular = document.getElementById("newsletter")
const policko = document.getElementById("inputNewsletter")

const odebirat = (event) => {
	event.preventDefault()
	const input = document.getElementById("inputNewsletter")
	const email = input.value
	formular.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`
}
const kontrolaPole = (event)=>{
	event.preventDefault()
	if(policko.value==='' || !policko.value.includes('@')){
		policko.classList.add("cervenyRamecek")
	}else{
		policko.classList.remove("cervenyRamecek")
	}
	
}

formular.addEventListener("submit", odebirat)
policko.addEventListener("input",kontrolaPole)
