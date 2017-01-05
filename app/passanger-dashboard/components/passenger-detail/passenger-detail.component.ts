import { Passenger } from '../../modules/passenger.interface/passenger.interface';
import { Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';


@Component({
    selector:'passenger-detail',
    styleUrls:['passenger-detail.component.scss'],
    template:`

      <span class="status" [class.checked-in]="detail.checkedIn"></span>
    <div>
                    <input type="text" 
                    *ngIf="editMode"
                    [value]="detail.name"
                    (input)="onNameChange(name.value);"
                    #name/>
    </div>
                    <div *ngIf="!editMode">
                    {{ detail.name }}
                    </div>
    <div>
           checked in date: 
           {{ detail.checkInDate? (detail.checkInDate | date: 'yMMMMd' | uppercase) : "No" }}
    </div>
        <div class="children">
        Children: {{detail.children?.length || 0}}
        </div>
        

    <button (click)="toggleEdit();">
        {{editMode? 'Done' : 'Edit'}}
    </button>
    <button (click)="onRemove();">
        Remove
    </button>

    `
})

export class PassengerDetailComponent implements OnChanges{

@Input()
 detail: Passenger;
 
@Output()
 remove: EventEmitter<any> = new EventEmitter;
 
@Output()
 edit: EventEmitter<any> = new EventEmitter;
 
 editMode: boolean = false

constructor(){};
ngOnChanges(change){
if (change.details){
    this.detail = Object.assign({}, change.details.currentValue);
}

}

onNameChange(value:string):void{
    this.detail.name = value;
}

toggleEdit():void{
    if (this.editMode){
        this.edit.emit(this.detail);
    }
    this.editMode = !this.editMode;
}
onRemove(){
this.remove.emit(this.detail);
}

}