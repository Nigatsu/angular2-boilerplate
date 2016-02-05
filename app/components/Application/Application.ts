import {Component,OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, Router, RouteConfig} from "angular2/router";
import {TailList} from "../TailList/TailList";
import {Home} from "../Home/Home";

@Component({
    selector: 'app-root',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/components/Application/Application.html',
})

@RouteConfig([
    {path:'hello/:name', name:'Hello', component: Home, useAsDefault: true},
    {path:'users-list', name:'Users', component: TailList},
])

export class Application{

    public name:String;

    constructor(private router:Router){}

    public onKeyPress(controlValue){
        if(controlValue){
            this.router.navigate(['Hello', {'name':controlValue}]);
        }
    }
}
