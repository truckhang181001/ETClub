@extends('layout')

@section('title','Các cuộc thi')

@section('content')
    @include('AllCompetitionPage.Page-breadcrumb')
    @include('AllCompetitionPage.tittle')
    <div class="competition_year">
        <div class="year_number">
            2022
        </div>
        <div class="year_line"></div>
    </div>
    @include('AllCompetitionPage.Upcomming')
    <div class="competition_year">
        <div class="year_number">
            2021
        </div>
        <div class="year_line"></div>
    </div>
    @include('AllCompetitionPage.Event-reverse')
    <div class="competition_year">
        <div class="year_number">
            2020
        </div>
        <div class="year_line"></div>
    </div>
    @include('AllCompetitionPage.Event')
    @include('AllCompetitionPage.Mobile')
@endsection