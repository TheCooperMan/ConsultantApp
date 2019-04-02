import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
   name: 'filter',
})
@Injectable()
export class FilterPipe implements PipeTransform {
   //  transform(items: any[], field: string, value: string): any[] {
   //     if (!items) {
   //         return [];
   //     }
   //      if (!field || !value) {
   //         return items;
   //      }
   //      return items.filter(i =>
   //          i[field].toLowerCase().includes(value.toLowerCase())
   //      );
   //     }
    transform(value: any[], searchString: string ){

       if (!searchString) {

          return value ;
        }

       return value.filter(it => {
           const lastname = it.lastname.toLocaleLowerCase().startsWith(searchString.toLocaleLowerCase().trim());
           const firstname = it.firstname.toLocaleLowerCase().startsWith(searchString.toLocaleLowerCase().trim());
           const email = it.email.toLocaleLowerCase().startsWith(searchString.toLocaleLowerCase().trim());
           return ( firstname + lastname + email);
        });
    }

}
