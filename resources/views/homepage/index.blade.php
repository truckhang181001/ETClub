{{-- Bat buoc co --}}
@extends('layout')
{{-- Title cua trang --}}
@section('title','Trang chủ')
{{-- Bat buoc co --}}
@section('content')
    @include('HomePage.NavBar')
    @include('HomePage.Banner')
    @include('HomePage.Introduction')
    @include('Homepage.Tech-corner')
    @include('HomePage.Competition')
    @include('HomePage.Thinking')
    @include('HomePage.Footer')
@endsection