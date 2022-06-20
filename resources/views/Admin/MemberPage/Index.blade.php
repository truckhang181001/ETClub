@extends('Admin.layout')
@section('title','Thành viên')
@section('content')
    @include('Admin.MemberPage.MemberHeader')
    @include('Admin.MemberPage.MemberCard')
    @include('Admin.MemberPage.MemberModal')
@endsection