import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
@Input()
post:Post
  constructor() { }

  ngOnInit(): void {
  }

}
