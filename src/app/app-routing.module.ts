import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { BrowseComponent } from "./browse/browse.component";
import { HomeComponent } from "./home/home.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { SearchComponent } from "./search/search.component";
import { AuthGuard } from "./core/guards/authGuard.service";

export const COMPONENTS = [BrowseComponent, HomeComponent, ItemDetailComponent, SearchComponent];

const routes: Routes = [
    { path:'', redirectTo:'home', pathMatch:'full'},
    { 
        path: "home", 
        loadChildren:'./pages/home/home.module#HomeModule', 
        outlet: "homeTab",
        canActivate:[AuthGuard] 
    },
    {
        path: 'login', 
        loadChildren: './pages/login/login.module#LoginModule', 
    },
    {
        path:"**",
        redirectTo:'home'
    }
   // { path: "browse", component: BrowseComponent, outlet: "browseTab" },
  //  { path: "search", component: SearchComponent, outlet: "searchTab" },

   // { path: "item/:id", component: ItemDetailComponent, outlet: "homeTab" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: true } )],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
