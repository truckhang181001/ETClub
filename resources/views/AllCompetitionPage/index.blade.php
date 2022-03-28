@extends('layout')

@section('title','Các cuộc thi')

@section('content')
    @include('AllCompetitionPage.tittle')
    @include('AllCompetitionPage.Year')
    @include('AllCompetitionPage.Upcomming')
    @include('AllCompetitionPage.Year')
    @include('AllCompetitionPage.Event-reverse')
    @include('AllCompetitionPage.Year')
    @include('AllCompetitionPage.Event')
    @include('AllCompetitionPage.Responsive')
@endsection