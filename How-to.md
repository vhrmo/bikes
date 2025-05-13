Ako získať link na foto v google photos:

- vytvor album
- daj zdielať - vytvor link a otvor
- otvor si development tools a v network tabe filtruj 'lh3.googleusercontent.com/pw'
- nájdi fotky a skopíruj linky
- updatni na konci linky width to 1280, odstráň auth...

Ako získať link na video v google photos:

- podobne ako pri fotkách si otvor development tools a v network tabe filtruj 'lh3'
- keď nájdeš fotku počiatočného framu videa - skopíruj link a nahraď parameter za '=' za 'dv'

```
https://lh3.googleusercontent.com/pw/some-long-code=w1260-h708-s-k-no?authuser=0

nahrad za:

https://lh3.googleusercontent.com/pw/some-long-code=dv
```