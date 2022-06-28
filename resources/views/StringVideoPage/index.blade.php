
@extends('layout')

@section('title','Chuỗi video')

@section('content')
<div class="videos-page"> 
  <div class="container"> 
    <div class="videos-page__title">
      <p>Chuỗi hoạt động:</p>
      <p>nâng cao năng lực công nghệ cho sinh viên</p>
    </div>
    @include('StringVideoPage.Subcribe-box')
    <div class="videos-page__hot-video">
      <div class="hot-video__name">video nổi bật</div>
      <div class="hot-video__list">
        @include('StringVideoPage.VideoCard')
        @include('StringVideoPage.VideoCard')
        @include('StringVideoPage.VideoCard')
        @include('StringVideoPage.VideoCard')
      </div>
    </div>
    <div class="videos-page__new-video">
      <div class="new-video__name">video mới nhất</div>
      <div class="new-video__list">
        @include('StringVideoPage.VideoCard')
        @include('StringVideoPage.VideoCard')
        @include('StringVideoPage.VideoCard')
        @include('StringVideoPage.VideoCard')
      </div>
      <button class="new-video__all">
        <a href="https://www.youtube.com/channel/UCI3jwuX0dBKc8Iy3VIXZb_Q">Xem tất cả</a>
      </button>
    </div>
    <div class="videos-page__string">
      <div class="string__head">
        <div class="string__name">Chuỗi hoạt động</div>
        <div class="string__option">
          <button class="new">Mới nhất</button>
          <button class="popular">Phổ biến nhất</button>
        </div>
      </div>
      <div class="string__list">
      @include('StringVideoPage.StringCard')
      @include('StringVideoPage.StringCard')
      @include('StringVideoPage.StringCard')
      @include('StringVideoPage.StringCard')
      @include('StringVideoPage.StringCard')
      @include('StringVideoPage.StringCard')
      @include('StringVideoPage.StringCard')
      @include('StringVideoPage.StringCard')
      </div>
    </div>
  </div>
</div>
@endsection