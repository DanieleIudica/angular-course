import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Category, Course } from "src/app/model/course";

@Component({
  selector: "course-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
  @Input() course: Course;
  @Input() index: number;
  @Output() courseClick = new EventEmitter();
  Category = Category;

  onCourseClick() {
    this.courseClick.emit(this.course);
  }
}
