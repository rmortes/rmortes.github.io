# ¿Por qué?

En unos días voy a empezar a jugar una campaña de DnD 5e basada en Eberron. Más información sobre esta campaña se puede encontrar en [la wiki que estoy haciendo poco a poco para ella](https://raul.zip/eberron/), a menos que el enlace esté roto.

Llevar la iniciativa es una de estas cosas que no te tienen por qué dar problemas... a menos que tengas TDAH. El proceso es sencillo, simplemente apúntate los nombres de los contendientes en una hoja de papel, en orden de iniciativa, y ve poniendo un punto conforme pase la batalla. ¿Pero y si se une un NPC nuevo al encuentro? ¿Y donde trackeo la vida de los enemigos? ¡Ay, se me ha olvidado apuntar el turno de este personaje! ¿Que acciones tenía este enemigo legendario...? Y así son los encuentros que maestreo, por lo menos en mi cabeza.

Como parte del tooling que estoy testeando para esta campaña encontré una [plataforma](https://dmdashboard.nl) que parece ser sencilla pero suficiente para lo que quiero: Llevar iniciativas y encuentros. Tiene un cisco de monstruos por defecto, y parece que puedo meter yo monstruos extra en caso de necesitarlos (o NPCs, para el caso...), con lo que no necesito más...

...o lo mismo si. Resulta que en la [otra plataforma](https://dicecloud.com/) (es una puta pasada, tuve una idea similar hace tiempo de hacer un creador de personajes parecido a como lo hace esta web, y me preguntaba por qué nadie lo había hecho antes. Si lo habían hecho, solo que no lo conocía) en la que estamos llevando las hojas de personaje *también* tiene tracker de la vida de los personajes. No tendría absolutamente ningún problema si una de las dos plataformas no llevara la vida. Una persona normal no tendría más problema que simplemente decirle a sus jugadores que ignorasen una de las dos fuentes de verdad de la vida. Ah, si solo fuera tan sencillo.
# ¿Qué?

Voy a hacer un pequeño servicio que actualice de forma bidireccional los datos de [DmDashboard](https://dmdashboard.nl/) y [Dicecloud](https://dicecloud.com/) (plataforma de gestión de hojas de personajes que estoy probando). En plan es tener un archivo en mi sistema que con un comando se ponga a escuchar actualizaciones de ambos servicios y los vaya cambiando.
> [!col]
> ```mermaid
> flowchart TB
> 
> A[Dicecloud] -->|La vida de un PJ cambia| B(Middle man)
> 
> B -->|Los cambios se reflejan| C[DmDashboard]
> ```
> 
> ```mermaid
> flowchart TB
> 
> C[DmDashboard] -->|El nombre de un PJ cambia| B(Middle man)
> 
> B -->|Los cambios se reflejan| A[Dicecloud]
> ```

# ¿Cómo?

Pues malamente. Ninguno de los dos servicios me dan APIs con las que sea fácil interactuar. Por una parte tenemos Dicecloud, que tiene una [página de documentación](https://dicecloud.com/docs) que a primera vista parece decente. De hecho, la existencia de esta página es lo que empezó este proyecto en primer lugar. Sin embargo, tras investigar durante 13 segundos extra la [página de la documentación de la API](https://dicecloud.com/docs/api), me encuentro con el primer problema: ¡Es de solo lectura!

Esto es una jodienda, porque de los dos casos que he definido me acabo de quitar el 50%. Nada, esto no me sirve. Abro las devtools y me dispongo a destripar la página. Actualizo la página con el personaje de pruebas que tengo. Le quito 1 de vida. ¿No hay peticiones nuevas? Hmmm... Huele a websockets. Efectivamente, subo un poco, y ahí está, un websocket abierto. A ver que tiene...

```json
{
  "msg": "method",
  "id": "2",
  "method": "creatureProperties.damage",
  "params": [
    {
      "_id": "WNb82kSNrNEKi47ZJ",
      "operation": "increment",
      "value": 1
    }
  ]
}
```

Huh... Este protocolo no me suena. No me jodas que es
## RPC

Full disclaimer: No he trabajado con RPC en mi vida. Lo conozco de oídas, pero nunca he hecho nada con el, así que no tengo ni idea de por donde empezar. Sin embargo, ahora el proyecto me ilusiona de una forma especial. Ya no es una herramienta más, ahora es *una oportunidad para aprender algo nuevo*. Y saben los Dioses que me gusta mucho aprender algo nuevo.

⚠️ WIP ⚠️

TODO:
- [ ] Investigar [meteor.js](https://guide.meteor.com/methods) que parece que el RPC origina de ahí y documentar como lo he averiguado
- [ ] Investigar como funciona la autenticación contra RPC y si se puede solicitar introspección de alguna forma
- [ ] Investigar la [API GraphQL](https://dmdashboard.nl/api/graphql) de DmDashboard y documentar [de donde la he sacado](https://docs.directus.io/getting-started/introduction.html)
- [ ] Arreglar el display del plugin de columnas