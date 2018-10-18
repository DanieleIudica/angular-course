import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, OnInit} from '@angular/core';
import {Course} from './model/course';
import {Observable} from 'rxjs';
import {CoursesService} from './services/courses.service';
import {AppConfig, CONFIG_TOKEN} from './config';
import {COURSES} from '../db-data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    courses: Course[] = COURSES;


    constructor(
        private coursesService: CoursesService,
        @Inject(CONFIG_TOKEN) private config: AppConfig) {


    }


    ngOnInit() {



    }

    onEditCourse() {

        const course = this.courses[0];

        const newCourse = {
            ...course,
            description: 'ngOnChanges',
            cardIndex: 1
        };

        this.courses[0] = newCourse;

    }

    save(course: Course) {

        this.coursesService.saveCourse(course)
            .subscribe(
                () => console.log('Course Saved!')
            );

    }


}
