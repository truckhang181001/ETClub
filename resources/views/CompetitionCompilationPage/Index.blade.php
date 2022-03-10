
{{-- Bat buoc co --}}
@extends('layout')
{{-- Title cua trang --}}
@section('title','Về CLB')
{{-- Bat buoc co --}}
@section('content')
    @include('CompetitionCompilationPage.CompetitionCompilation')
    @include('pagination.Pagination')
@endsections