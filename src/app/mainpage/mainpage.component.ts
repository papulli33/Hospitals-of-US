import { Component, OnInit } from '@angular/core';
import { briefHospital, hospitalModel } from '../_services/hospital.model';
import { HospitalService } from '../_services/hospital.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';


import Map from 'ol/Map';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat,toLonLat } from 'ol/proj.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import {Circle as CircleStyle, Fill, Stroke, Style, Text,Icon} from 'ol/style';
import OSM from 'ol/source/OSM';
import Overlay from 'ol/Overlay';
import { toStringHDMS } from 'ol/coordinate.js';
import Geometry from 'ol/geom/Geometry';
import Cluster from 'ol/source/Cluster';
import { ThisReceiver } from '@angular/compiler';
import { NgClass } from '@angular/common';
import BingMaps from'ol/source/BingMaps';



//HospitalService
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  
  
  vectorSource;
  clusterLayer;
  vectorLayer;
  rasterLayer;
  
  hospitalDetails:hospitalModel={
    x:"",
    y: "",
    fid: "",
    id: "",
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    zip4: "",
    telephone:"",
    type: "",
    status: "",
    population: 0,
    county: "",
    countyfips:"" ,
    country: "",
    latitude: 0,
    longitude: 0,
    naicsCode: "",
    naicsDesc: "",
    source: "",
    sourcedate: "",
    valMethod: "",
    valDate: "",
    website: "",
    stateId: "",
    altName: "",
    stFips: "",
    owner: "",
    ttlStaff: "",
    beds: 0,
    trauma:"",
    helipad: ""
};

  formState = this.fb.group({
    HospitalState:"",
    HospitalName:"",
    HospitalType:"",
    HospitalStatus:"",
  })

  isfiltered:boolean=false;
  drawTable:boolean=false;
  layerSelector:number=1;
  loadFailed:boolean=false;
  constructor(public service:HospitalService,private toastr: ToastrService,private fb: FormBuilder) { }
  list:hospitalModel[];
  listView:hospitalModel[];
  loading:boolean = false;
 // hospitalDetails: any;
    
  briefList:briefHospital[];
  map:Map;
  view =new View({
    center: [0, 0],
    zoom: 3
  })

  ngOnInit(): void {
    
    this.loadList();
    this.initilizeMap2();


  }

  checkModal(){
    console.log(this.hospitalDetails)
  }

  AddFeature(){
    this.vectorSource.clear();
    var featureTemp=[]
    for (const element of this.listView) {
    featureTemp.push(new Feature({
      element: element,
      geometry: new Point(fromLonLat([element.longitude, element.latitude]))
    }))  
    };
    
    this.vectorSource.addFeatures(featureTemp)

    const extent = this.vectorLayer.getSource().getExtent();
    this.view.fit(extent,{duration:400,maxZoom:8,padding: [ 100, 100, 100, 100 ]});
  }

  clearMap(){
    this.map.dispose()
    
  }



 loadList(){
    
    this.loading=true;
  this.service.getHospitals().subscribe(res=> {
    this. list=res as hospitalModel[],this.loading=false,console.log("doldu"),this.listView=this.list.slice(),this.AddFeature(),this.toastr.success("Data successfully retrieved")},err=> {
      this.toastr.warning("Could not retrieve the hospital data, please refresh the page"),this.loadFailed=true,this.clearMap()})

    
  }
  LayerChange(i:number){

    if(i==0){
      this.map.setLayers([
        new TileLayer({
          source: new OSM(),
        }), this.vectorLayer
      ])
    }
    else if(i==1){
      this.map.setLayers([
        new TileLayer({
          source: new BingMaps({ key:'AsmZX6Q8oQACekf3xwDyYpdMfZK1E6wXYfFhJNh3U7UuhHVwvl2Dh2mf74UpGwtg',imagerySet: 'Road',}),
        }), this.vectorLayer
      ])
    }
    

  }

  filteredTable(){
    if(!this.isfiltered){
      this.toastr.warning("Apply a filter and try again.","There are no filters applied.");
      
    }
    if(this.loading){
      this.toastr.warning("Data has not loaded yet.")
    }
    if(!this.loading&&this.isfiltered){
      this.drawTable=true;
    }
  }

  resetFilter(){
    this.drawTable=false;
    this.isfiltered=false;
    this.listView=this.list.slice();
    this.AddFeature();
    this.toastr.success("Filters reset.")
  }

  filterByName(){
    this.isfiltered=true;
    //console.log(this.formState.value.HospitalName);
    var hosName:string=this.formState.value.HospitalName
    hosName=hosName.toUpperCase();
    //console.log(hosName)
    
    var filterTempList=[];
    for (const element of this.listView) {
      if(element.name.includes(hosName)){
        filterTempList.push(element);
      }
    }
    if(filterTempList.length==0){
      this.toastr.warning("The filter didn't go through, try something else","There are no hospitals fitting this filter");
    }else{
      this.listView=filterTempList;
      this.AddFeature();
      this.toastr.success("Found "+this.listView.length+" Hospitals","Filter successfully applied.")
    }
    this.formState.patchValue({HospitalState: "",HospitalType:"",HospitalName:"",HospitalStatus:""});
  }
  filterByState(){
    this.isfiltered=true;
    //console.log(this.formState.value.HospitalState);
    var filterTempList=[];
    for (const element of this.listView) {
      if(element.state==this.formState.value.HospitalState){
        filterTempList.push(element);
      }
    }
    if(filterTempList.length==0){
      this.toastr.warning("The filter didn't go through, try something else","There are no hospitals fitting this filter");
    }else{
      this.listView=filterTempList;
      this.AddFeature();
      this.toastr.success("Found "+this.listView.length+" Hospitals","Filter successfully applied.")
    }
    this.formState.patchValue({HospitalState: "",HospitalType:"",HospitalName:"",HospitalStatus:""});
  }
  filterByType(){
    this.isfiltered=true;
    //console.log(this.formState.value.HospitalType);

    
    var hosType:string=this.formState.value.HospitalType
    hosType=hosType.toUpperCase();
    //console.log(hosType)
    
    var filterTempList=[];
    for (const element of this.listView) {
      if(element.type.includes(hosType)){
        filterTempList.push(element);
      }
    }
    if(filterTempList.length==0){
      this.toastr.warning("The filter didn't go through, try something else","There are no hospitals fitting this filter");
    }else{
      this.listView=filterTempList;
      this.AddFeature();
      this.toastr.success("Found "+this.listView.length+" Hospitals","Filter successfully applied.")
    }
    this.formState.patchValue({HospitalState: "",HospitalType:"",HospitalName:"",HospitalStatus:""});
    
  }
  filterByStatus(){
    this.isfiltered=true;
    //console.log(this.formState.value.HospitalStatus)
    var filterTempList=[];
    for (const element of this.listView) {
      if(element.status.includes(this.formState.value.HospitalStatus)){
        filterTempList.push(element);
      }
    }
    if(filterTempList.length==0){
      this.toastr.warning("The filter didn't go through, try something else","There are no hospitals fitting this filter");
    }else{
      this.listView=filterTempList;
      this.AddFeature();
      this.toastr.success("Found "+this.listView.length+" Hospitals","Filter successfully applied.")
    }

    this.formState.patchValue({HospitalState: "",HospitalType:"",HospitalName:"",HospitalStatus:""});
  }


  goToLink(url: string){
    if(url.includes("http")){
      window.open(
        url, "_blank");
    }else{
      window.open(
        "http://"+url, "_blank");
    }

}

  initilizeMap2() {


    const container = document.getElementById('popup');
    const content = document.getElementById('popup-content');
    const closer = document.getElementById('popup-closer');


    const overlay = new Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    });

    this.vectorSource = new VectorSource({
      features: [
      ]
    });
    


    const clusterSource = new Cluster({
      distance: 40,
      source: this.vectorSource
    });
    this.clusterLayer = new VectorLayer({
      source: clusterSource
    })

    const styleCache = {};
      this.vectorLayer = new VectorLayer({
        source: clusterSource,
        style: function(feature) {
          const size = feature.get('features').length;
          let style = styleCache[size];
          if (!style) {
            if(size==1){
              style=new Style({
                image: new Icon(({
                  
                  crossOrigin: 'anonymous',
                  src: '/assets/ksks.png',
                  imgSize: [20, 20]
                }))

              })
            }
              else{style = new Style({
                image: new CircleStyle({
                  radius: 10,
                  stroke: new Stroke({
                    color: '#fff'
                  }),
                  fill: new Fill({
                    color: 'red'
                  })
                }),
                text: new Text(
                  {
                  text: size.toString(),
                  fill: new Fill({
                    color: '#fff'
                  })
                })
              });}
            styleCache[size] = style;
          }
          return style;
        }
      });

    const map = new Map({
      layers: [
        new TileLayer({
          source: new BingMaps({ key:'*********************',imagerySet: 'RoadOnDemand',}), 
        }), this.vectorLayer
      ],
      overlays: [overlay],
      target: 'map',
      view: this.view
    });
    this.map=map;
    this.map.getView().setMaxZoom(20)
// pointermove
    map.on('singleclick', (evt: any) => {
      const coordinate = evt.coordinate;

      if(map.hasFeatureAtPixel(evt.pixel)){
        var clickedFeatureClust= map.getFeaturesAtPixel(evt.pixel).pop();
        var clickedFeature =clickedFeatureClust.get("features");
        if(clickedFeature.length==1){
        var clickedHospital:hospitalModel= clickedFeature[0].get("element");        
        this.hospitalDetails=clickedHospital;
        content.innerHTML = '<h4 style="text-align:center;">'+ clickedHospital.name +'</h4>'+ '<button style="margin-left:35%;" type="button" class="btn btn-info " data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>'

        overlay.setPosition(coordinate);
        }
        else if(clickedFeature.length>1){
          this.toastr.error("The point you clicked have multiple hospitals, zoom in to see individual hospitals.")
        }
 
        
        
      }

      
      


    });
    

    closer.onclick = function () {
      overlay.setPosition(undefined);
      closer.blur();
      return false;
    };
  }
  
  

}


