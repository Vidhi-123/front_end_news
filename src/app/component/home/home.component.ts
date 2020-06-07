import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
import { Router } from '@angular/router';
// import { NewsService } from 'src/app/service/news.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: Array<any> = [];
  business: Array<any> = [];
  trending_post: Array<any> = [];

  constructor(private newsService: NewsService, private _router: Router) { }



  ngOnInit(): void {


    this.newsService.getGeneralArticles().subscribe(
      (data: any) => {
        data.articles.sort(
          (a, b) => b.publishedAt.localeCompare(a.publishedAt)
        )
        for (let i = 0; i < 4; i++) {
          if (data.articles[i].description.length >= 100 || data.articles[i].title.length >= 40) {
            data.articles[i].title = data.articles[i].title.substr(0, 40) + '...';
            data.articles[i].description = data.articles[i].description.substr(0, 100) + '...';
            this.trending_post.push(data.articles[i]);
          }
          else {
            this.trending_post.push(data.articles[i]);
          }

        }


      }


    )




    this.newsService.getArticleByentertainment().subscribe(
      (data: any) => {
        data.articles.sort(
          (a, b) => b.publishedAt.localeCompare(a.publishedAt)
        )
        for (let i = 0; i < 3; i++) {
          if (data.articles[i].description.length >= 100 || data.articles[i].title.length >= 40) {
            data.articles[i].title = data.articles[i].title.substr(0, 40) + '...';
            data.articles[i].description = data.articles[i].description.substr(0, 100) + '...';
            this.articles.push(data.articles[i]);
          }
          else {

            this.articles.push(data.articles[i]);
          }

        }


      }


    )








    this.newsService.getArticleBySports().subscribe(
      (data: any) => {
        // console.log(data.articles);
        data.articles.sort(
          (a, b) => b.publishedAt.localeCompare(a.publishedAt)
        )
        for (let i = 0; i < 3; i++) {

          if (data.articles[i].description.length >= 100 || data.articles[i].title.length >= 40) {
            data.articles[i].title = data.articles[i].title.substr(0, 40) + '...';
            data.articles[i].description = data.articles[i].description.substr(0, 100) + '...';
            // console.log(data.articles[i].description);
            this.articles.push(data.articles[i]);
          }
          else {

            this.articles.push(data.articles[i]);
          }

        }


      }
    )




    this.newsService.getArticleByScience().subscribe(
      (data: any) => {
        //    console.log(data.articles);
        data.articles.sort(
          (a, b) => b.publishedAt.localeCompare(a.publishedAt)
        )
        for (let i = 0; i < 3; i++) {

          if (data.articles[i].description.length >= 100 || data.articles[i].title.length >= 40) {
            data.articles[i].title = data.articles[i].title.substr(0, 40) + '...';
            data.articles[i].description = data.articles[i].description.substr(0, 100) + '...';
            //  console.log(data.articles[i].description);
            this.articles.push(data.articles[i]);
          }
          else {

            this.articles.push(data.articles[i]);
          }

        }


      }
    )


    this.newsService.getArticleByTechnology().subscribe(
      (data: any) => {
        //  console.log(data.articles);
        data.articles.sort(
          (a, b) => b.publishedAt.localeCompare(a.publishedAt)
        )
        for (let i = 0; i < 3; i++) {


          if (data.articles[i].description.length >= 100 || data.articles[i].title.length >= 40) {
            data.articles[i].title = data.articles[i].title.substr(0, 40) + '...';
            data.articles[i].description = data.articles[i].description.substr(0, 100) + '...';
            //    console.log(data.articles[i].description);
            this.articles.push(data.articles[i]);
          }
          else
            this.articles.push(data.articles[i]);
        }


      }
    )




    this.newsService.getArticleByHealth().subscribe(
      (data: any) => {
        // console.log(data.articles);
        data.articles.sort(
          (a, b) => b.publishedAt.localeCompare(a.publishedAt)
        )
        for (let i = 0; i < 3; i++) {

          if (data.articles[i].description.length >= 100 || data.articles[i].title.length >= 40) {
            data.articles[i].title = data.articles[i].title.substr(0, 40) + '...';
            data.articles[i].description = data.articles[i].description.substr(0, 100) + '...';
            //   console.log(data.articles[i].description);
            this.articles.push(data.articles[i]);
          }
          else
            this.articles.push(data.articles[i]);
        }


      }
    )


    this.newsService.getArticleByBusiness().subscribe(
      (data: any) => {
        //console.log(data.articles);
        data.articles.sort(
          (a, b) => b.publishedAt.localeCompare(a.publishedAt)
        )
        for (let i = 0; i < 3; i++) {

          if (data.articles[i].description.length >= 100 || data.articles[i].title.length >= 40) {
            data.articles[i].title = data.articles[i].title.substr(0, 40) + '...';
            data.articles[i].description = data.articles[i].description.substr(0, 100) + '...';
            //  console.log(data.articles[i].description);
            this.articles.push(data.articles[i]);
          }
          else
            this.articles.push(data.articles[i]);
        }
        //console.log(this.articles);

      }

    )







  }
  // searchArticle(source){
  //   this.newsService.getArticlesById(source).subscribe(data => this.articles=data['articles']);
  // }
  businessArticle() {
    // this.newsService.getArticleByBusiness().subscribe(data => this.business=data['articles']);
    // console.log(this.business);
  }
}
