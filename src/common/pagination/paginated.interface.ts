// we are creating Module and Interface to be able to 
// use pagination in all the module. I t will be like a cetral place

//use a generic type since the pagination will be use by mny services, 
// therefore we dont know which typpe of that will be used. T is the generic type
export interface PaginationInterface<T>{
    data:T[],
    meta:{
        itemPerPage:number;
        totalItems:number;
        currentPage:number;
        totalPages:number;
    },
    links:{
        first:string;
        last:string;
        current:string;
        previous:string;
        next:string;
    }
}