@extends('Admin.layout')
@section('title','Bản tin ET')
@section('content')
@include('Admin.ETNewsPage.NewsHeader')
@include('Admin.ETNewsPage.NewsCard')
@include('Admin.ETNewsPage.NewsModal')
@endsection