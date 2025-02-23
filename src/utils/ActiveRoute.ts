export const ActiveRoute = (pathname:string, routePath:string, behavior:string) => {
  if(behavior === 'Nav'){
    if(pathname === routePath){
      return 'border-whiteLotus text-whiteLotus'
    }
  }else if(behavior === 'footer'){
    if(pathname === routePath){
      return 'font-bold text-fourth'
    }
  }
}