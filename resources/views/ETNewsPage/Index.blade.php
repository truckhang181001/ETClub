@extends('layout')
{{-- Title cua trang --}}
@section('title','Bản tin ET')
{{-- Bat buoc co --}}
@section('content')
    @include('ETNewsPage.Title')
    @include('ETNewsPage.NewestNews')
    @include('ETNewsPage.MaybeInterested')
    @include('ETNewsPage.FilterAndActivitiesCard')
@endsection