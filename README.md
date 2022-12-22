# NgxSwingingChristmasBalls

Swing christmas balls on mouse hover on Angular

![example.gif](https://i.postimg.cc/TYmzYKjp/example.gif)

## Installation

Run
``` shell
npm install ngx-swinging-christmas-balls
```

In `app.module.ts`
``` ts
import { NgModule } from '@angular/core';
import { NgxSwingingChristmasBallsModule } from 'ngx-swinging-christmas-balls';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxSwingingChristmasBallsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Use

``` html
<swinging-christmas-balls [count]="6" [scale]="-1"></swinging-christmas-balls>
```

### Params
|param|description|default|
|---|---|---|
|count| Balls count |`1`|
|scale| Ball size scale (`float`). If the value is less then `0`, then each ball will have a random scale from `0.8` to `1.2` | `1` |

## Example
You can find an example project in `./src`