# ¿Por qué?

En unos días voy a empezar a jugar una campaña de DnD 5e basada en Eberron. Más información sobre esta campaña se puede encontrar en [la wiki que estoy haciendo poco a poco para ella](https://raul.zip/eberron/), a menos que el enlace esté roto.

Llevar la iniciativa es una de estas cosas que no te tienen por qué dar problemas... a menos que tengas TDAH. El proceso es sencillo, simplemente apúntate los nombres de los contendientes en una hoja de papel, en orden de iniciativa, y ve poniendo un punto conforme pase la batalla. ¿Pero y si se une un NPC nuevo al encuentro? ¿Y donde trackeo la vida de los enemigos? ¡Ay, se me ha olvidado apuntar el turno de este personaje! ¿Que acciones tenía este enemigo legendario...? Y así son los encuentros que maestreo, por lo menos en mi cabeza.

Como parte del tooling que estoy testeando para esta campaña encontré una [plataforma](https://dmdashboard.nl) que parece ser sencilla pero suficiente para lo que quiero: Llevar iniciativas y encuentros. Tiene un cisco de monstruos por defecto, y parece que puedo meter yo monstruos extra en caso de necesitarlos (o NPCs, para el caso...), con lo que no necesito más...

...o lo mismo si. Resulta que en la [otra plataforma](https://dicecloud.com/) (es una puta pasada, tuve una idea similar hace tiempo de hacer un creador de personajes parecido a como lo hace esta web, y me preguntaba por qué nadie lo había hecho antes. Si lo habían hecho, solo que no lo conocía) en la que estamos llevando las hojas de personaje *también* tiene tracker de la vida de los personajes. No tendría absolutamente ningún problema si una de las dos plataformas no llevara la vida. Una persona normal no tendría más problema que simplemente decirle a sus jugadores que ignorasen una de las dos fuentes de verdad de la vida. Ah, si solo fuera tan sencillo.
# ¿Qué?

Voy a hacer un pequeño servicio que actualice de forma bidireccional los datos de [DmDashboard](https://dmdashboard.nl/) y [Dicecloud](https://dicecloud.com/) (plataforma de gestión de hojas de personajes que estoy probando). En plan es tener un archivo en mi sistema que con un comando se ponga a escuchar actualizaciones de ambos servicios y los vaya cambiando.

```mermaid

```

# ¿Cómo?

