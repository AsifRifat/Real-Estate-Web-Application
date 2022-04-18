Search.setIndex({docnames:["accounts","accounts.migrations","filter_ads","filter_ads.migrations","index","modules","post_ads","post_ads.migrations","realtors","realtors.migrations"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["accounts.rst","accounts.migrations.rst","filter_ads.rst","filter_ads.migrations.rst","index.rst","modules.rst","post_ads.rst","post_ads.migrations.rst","realtors.rst","realtors.migrations.rst"],objects:{"":[[0,0,0,"-","accounts"],[2,0,0,"-","filter_ads"],[6,0,0,"-","post_ads"],[8,0,0,"-","realtors"]],"accounts.apps":[[0,1,1,"","AccountsConfig"]],"accounts.apps.AccountsConfig":[[0,2,1,"","default_auto_field"],[0,2,1,"","name"]],"accounts.migrations":[[1,0,0,"-","0001_initial"]],"accounts.migrations.0001_initial":[[1,1,1,"","Migration"]],"accounts.migrations.0001_initial.Migration":[[1,2,1,"","dependencies"],[1,2,1,"","initial"],[1,2,1,"","operations"]],"accounts.models":[[0,1,1,"","UserAccount"],[0,1,1,"","UserAccountManager"]],"accounts.models.UserAccount":[[0,3,1,"","DoesNotExist"],[0,3,1,"","MultipleObjectsReturned"],[0,2,1,"","REQUIRED_FIELDS"],[0,2,1,"","USERNAME_FIELD"],[0,2,1,"","email"],[0,4,1,"","get_full_name"],[0,4,1,"","get_short_name"],[0,2,1,"","groups"],[0,2,1,"","id"],[0,2,1,"","is_active"],[0,2,1,"","is_staff"],[0,2,1,"","is_superuser"],[0,2,1,"","last_login"],[0,2,1,"","logentry_set"],[0,2,1,"","name"],[0,2,1,"","objects"],[0,2,1,"","password"],[0,2,1,"","user_permissions"]],"accounts.models.UserAccountManager":[[0,4,1,"","create_superuser"],[0,4,1,"","create_user"]],"accounts.views":[[0,1,1,"","SignupView"]],"accounts.views.SignupView":[[0,2,1,"","permission_classes"],[0,4,1,"","post"]],"filter_ads.apps":[[2,1,1,"","FilterAdsConfig"]],"filter_ads.apps.FilterAdsConfig":[[2,2,1,"","default_auto_field"],[2,2,1,"","name"]],"filter_ads.migrations":[[3,0,0,"-","0001_initial"],[3,0,0,"-","0002_delete_ads"]],"filter_ads.migrations.0001_initial":[[3,1,1,"","Migration"]],"filter_ads.migrations.0001_initial.Migration":[[3,2,1,"","dependencies"],[3,2,1,"","initial"],[3,2,1,"","operations"]],"filter_ads.migrations.0002_delete_ads":[[3,1,1,"","Migration"]],"filter_ads.migrations.0002_delete_ads.Migration":[[3,2,1,"","dependencies"],[3,2,1,"","operations"]],"filter_ads.views":[[2,1,1,"","FilterView"]],"filter_ads.views.FilterView":[[2,2,1,"","permission_classes"],[2,4,1,"","post"],[2,2,1,"","serializer_class"]],"post_ads.admin":[[6,1,1,"","ListingAdmin"]],"post_ads.admin.ListingAdmin":[[6,2,1,"","list_display"],[6,2,1,"","list_display_links"],[6,2,1,"","list_editable"],[6,2,1,"","list_filter"],[6,2,1,"","list_per_page"],[6,5,1,"","media"],[6,2,1,"","search_fields"]],"post_ads.apps":[[6,1,1,"","PostAdsConfig"]],"post_ads.apps.PostAdsConfig":[[6,2,1,"","default_auto_field"],[6,2,1,"","name"]],"post_ads.migrations":[[7,0,0,"-","0001_initial"]],"post_ads.migrations.0001_initial":[[7,1,1,"","Migration"]],"post_ads.migrations.0001_initial.Migration":[[7,2,1,"","dependencies"],[7,2,1,"","initial"],[7,2,1,"","operations"]],"post_ads.models":[[6,1,1,"","Listing"]],"post_ads.models.Listing":[[6,3,1,"","DoesNotExist"],[6,1,1,"","HomeType"],[6,3,1,"","MultipleObjectsReturned"],[6,1,1,"","SaleType"],[6,2,1,"","address"],[6,2,1,"","bathrooms"],[6,2,1,"","bedrooms"],[6,2,1,"","city"],[6,2,1,"","description"],[6,4,1,"","get_home_type_display"],[6,4,1,"","get_next_by_list_date"],[6,4,1,"","get_previous_by_list_date"],[6,4,1,"","get_sale_type_display"],[6,2,1,"","home_type"],[6,2,1,"","id"],[6,2,1,"","is_published"],[6,2,1,"","list_date"],[6,2,1,"","objects"],[6,2,1,"","open_house"],[6,2,1,"","photo_1"],[6,2,1,"","photo_10"],[6,2,1,"","photo_11"],[6,2,1,"","photo_12"],[6,2,1,"","photo_13"],[6,2,1,"","photo_14"],[6,2,1,"","photo_15"],[6,2,1,"","photo_2"],[6,2,1,"","photo_3"],[6,2,1,"","photo_4"],[6,2,1,"","photo_5"],[6,2,1,"","photo_6"],[6,2,1,"","photo_7"],[6,2,1,"","photo_8"],[6,2,1,"","photo_9"],[6,2,1,"","photo_main"],[6,2,1,"","postcode"],[6,2,1,"","price"],[6,2,1,"","realtor"],[6,2,1,"","realtor_id"],[6,2,1,"","sale_type"],[6,2,1,"","slug"],[6,2,1,"","sqft"],[6,2,1,"","state"],[6,2,1,"","title"]],"post_ads.models.Listing.HomeType":[[6,2,1,"","APARTMENT"],[6,2,1,"","FLAT"],[6,2,1,"","PENTHOUSE"],[6,2,1,"","PLOT"]],"post_ads.models.Listing.SaleType":[[6,2,1,"","FOR_RENT"],[6,2,1,"","FOR_SALE"]],"post_ads.serializers":[[6,1,1,"","ListingDetailSerializer"],[6,1,1,"","ListingSerializer"]],"post_ads.serializers.ListingDetailSerializer":[[6,1,1,"","Meta"]],"post_ads.serializers.ListingDetailSerializer.Meta":[[6,2,1,"","fields"],[6,2,1,"","lookup_field"],[6,2,1,"","model"]],"post_ads.serializers.ListingSerializer":[[6,1,1,"","Meta"]],"post_ads.serializers.ListingSerializer.Meta":[[6,2,1,"","fields"],[6,2,1,"","model"]],"post_ads.views":[[6,1,1,"","ListingDetailView"],[6,1,1,"","ListingsView"]],"post_ads.views.ListingDetailView":[[6,2,1,"","lookup_field"],[6,2,1,"","queryset"],[6,2,1,"","serializer_class"]],"post_ads.views.ListingsView":[[6,2,1,"","lookup_field"],[6,2,1,"","permission_classes"],[6,2,1,"","queryset"],[6,2,1,"","serializer_class"]],"realtors.admin":[[8,1,1,"","RealtorAdmin"]],"realtors.admin.RealtorAdmin":[[8,2,1,"","list_display"],[8,2,1,"","list_display_links"],[8,2,1,"","list_per_page"],[8,5,1,"","media"],[8,2,1,"","search_fields"]],"realtors.apps":[[8,1,1,"","RealtorsConfig"]],"realtors.apps.RealtorsConfig":[[8,2,1,"","default_auto_field"],[8,2,1,"","name"]],"realtors.migrations":[[9,0,0,"-","0001_initial"]],"realtors.migrations.0001_initial":[[9,1,1,"","Migration"]],"realtors.migrations.0001_initial.Migration":[[9,2,1,"","dependencies"],[9,2,1,"","initial"],[9,2,1,"","operations"]],"realtors.models":[[8,1,1,"","Realtor"]],"realtors.models.Realtor":[[8,3,1,"","DoesNotExist"],[8,3,1,"","MultipleObjectsReturned"],[8,2,1,"","date_hired"],[8,2,1,"","description"],[8,2,1,"","email"],[8,4,1,"","get_next_by_date_hired"],[8,4,1,"","get_previous_by_date_hired"],[8,2,1,"","id"],[8,2,1,"","listing_set"],[8,2,1,"","name"],[8,2,1,"","objects"],[8,2,1,"","phone"],[8,2,1,"","photo"],[8,2,1,"","top_seller"]],"realtors.serializers":[[8,1,1,"","RealtorSerializer"]],"realtors.serializers.RealtorSerializer":[[8,1,1,"","Meta"]],"realtors.serializers.RealtorSerializer.Meta":[[8,2,1,"","fields"],[8,2,1,"","model"]],"realtors.views":[[8,1,1,"","RealtorListView"],[8,1,1,"","RealtorView"],[8,1,1,"","TopSellerView"]],"realtors.views.RealtorListView":[[8,2,1,"","pagination_class"],[8,2,1,"","permission_classes"],[8,2,1,"","queryset"],[8,2,1,"","serializer_class"]],"realtors.views.RealtorView":[[8,2,1,"","queryset"],[8,2,1,"","serializer_class"]],"realtors.views.TopSellerView":[[8,2,1,"","pagination_class"],[8,2,1,"","permission_classes"],[8,2,1,"","queryset"],[8,2,1,"","serializer_class"]],accounts:[[0,0,0,"-","admin"],[0,0,0,"-","apps"],[1,0,0,"-","migrations"],[0,0,0,"-","models"],[0,0,0,"-","tests"],[0,0,0,"-","urls"],[0,0,0,"-","views"]],filter_ads:[[2,0,0,"-","admin"],[2,0,0,"-","apps"],[3,0,0,"-","migrations"],[2,0,0,"-","models"],[2,0,0,"-","serializers"],[2,0,0,"-","tests"],[2,0,0,"-","urls"],[2,0,0,"-","views"]],post_ads:[[6,0,0,"-","admin"],[6,0,0,"-","apps"],[7,0,0,"-","migrations"],[6,0,0,"-","models"],[6,0,0,"-","serializers"],[6,0,0,"-","tests"],[6,0,0,"-","urls"],[6,0,0,"-","views"]],realtors:[[8,0,0,"-","admin"],[8,0,0,"-","apps"],[9,0,0,"-","migrations"],[8,0,0,"-","models"],[8,0,0,"-","serializers"],[8,0,0,"-","tests"],[8,0,0,"-","urls"],[8,0,0,"-","views"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","exception","Python exception"],"4":["py","method","Python method"],"5":["py","property","Python property"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:exception","4":"py:method","5":"py:property"},terms:{"0001_initi":[0,2,5,6,8],"0002_delete_ad":[2,5],"0012_alter_user_first_name_max_length":1,"1800":6,"2":6,"20":8,"25":6,"600":6,"abstract":1,"class":[0,1,2,3,6,7,8,9],"default":[0,2],"enum":6,"function":[0,2],"return":[0,2],"true":[1,3,6,7,8,9],A:[0,6,8],And:6,For:6,In:[0,6,8],Is:6,The:[6,8],__all__:[6,8],_description_:2,_type_:2,abstractbaseus:0,accessor:[0,6,8],account:4,accountsconfig:0,ad:[3,6],address:[6,7],admin:5,admin_sit:[6,8],agent:8,alia:[2,6,8],all:[0,6,8],allow:[0,2,6],allowani:[0,2,6,8],along:8,ani:6,apart:6,apiview:[0,2],app:5,app_label:[1,3,7,9],app_modul:[0,2,6,8],app_nam:[0,2,6,8],appconfig:[0,2,6,8],appropri:[6,8],ar:0,arg:[0,6,8],assign:[6,8],attribut:6,auth:[0,1],authent:6,avail:6,b:8,base:[0,1,2,3,6,7,8,9],base_us:0,baseusermanag:0,bathroom:[6,7],bedroom:[6,7],below:[0,8],bigautofield:[0,1,2,3,6,7,8,9],booleanfield:[1,7,9],bridg:6,bu:6,built:[0,8],c:8,charfield:[1,6,7,9],child:[0,6,8],children:[0,6,8],choic:6,citi:[6,7],config:[0,2,6,8],construct:6,content:5,contrib:[0,6,8],core:[0,6,8],correspond:8,creat:[0,8],create_forward_many_to_many_manag:[0,8],create_superus:0,create_us:0,createmodel:[1,3,7,9],criteria:2,custom:0,data:0,databas:[0,6,8],date:6,date_hir:[8,9],datetimefield:[1,6,7,8,9],db:[0,1,2,3,6,7,8,9],deatail:6,decimalfield:7,default_auto_field:[0,2,6,8],defer:[0,6,8],defin:[0,8],deleg:[0,8],deletemodel:3,depend:[1,3,7,9],descript:[6,7,8,9],design:6,dhaka:6,differ:[6,8],django:[0,1,2,3,6,7,8,9],doesnotexist:[0,6,8],dynam:[0,8],either:0,email:[0,1,8,9],emailfield:1,enter:0,error:0,estat:8,exampl:[0,6,8],except:[0,6,8],execut:[0,6,8],fals:[1,6,8],field:[0,1,3,6,7,8,9],file:[6,7,9],filedescriptor:[6,8],filter:2,filter_ad:4,filteradsconfig:2,filterview:2,first:[0,6,8],flat:6,for_rent:6,for_sal:6,foreignkei:[0,3,6,7,8],format:[0,2],forward:[0,6],forwardmanytoonedescriptor:6,forwardonetoonedescriptor:6,from:[0,6,8],ft:6,full:0,gener:[6,8],get_full_nam:0,get_home_type_displai:6,get_next_by_date_hir:8,get_next_by_list_d:6,get_previous_by_date_hir:8,get_previous_by_list_d:6,get_sale_type_displai:6,get_short_nam:0,group:[0,1],gulshan:6,height:[6,8],height_field:[6,8],home_typ:[6,7],hometyp:6,id:[0,1,3,6,7,8,9],imagefield:[6,7,8,9],implement:[0,8],index:4,initi:[1,3,7,9],insert:6,instanc:[0,6,8],integerfield:7,is_act:[0,1],is_next:[6,8],is_publish:[6,7],is_staff:[0,1],is_superus:[0,1],json:[0,2],just:[6,8],kwarg:[0,2,6,8],last_login:[0,1],like:[6,8],list:[0,2,6,7,8],list_dat:[6,7],list_displai:[6,8],list_display_link:[6,8],list_edit:6,list_filt:6,list_per_pag:[6,8],listapiview:[6,8],listing_set:8,listingadmin:6,listingdetailseri:6,listingdetailview:6,listingseri:[2,6],listingsview:6,load:[0,6,8],logentry_set:0,lookup_field:6,manag:[0,6,8],mani:[0,6,8],manytomanydescriptor:0,manytomanyfield:[0,1],media:[6,8],meta:[6,8],migrat:[0,2,5,6,8],model:[1,3,5,7,9],modeladmin:[6,8],modelseri:[6,8],modul:[4,5],most:[0,8],mr:8,multipleobjectsreturn:[0,6,8],name:[0,1,2,3,6,7,8,9],necessari:6,need:6,none:[0,2,8],normal:0,object:[0,6,8],objectdoesnotexist:[0,6,8],one:[0,6,8],onli:[6,8],open_hous:[6,7],oper:[1,3,7,9],opert:2,option:[0,1,2,6,8],order:6,overal:8,packag:[4,5],page:4,pagination_class:8,paramet:[0,2,6],parent:[0,6,8],password:[0,1],penthous:6,perform:2,permiss:[0,2,6,8],permission_class:[0,2,6,8],permissionsmixin:0,phone:[8,9],photo:[8,9],photo_10:[6,7],photo_11:[6,7],photo_12:[6,7],photo_13:[6,7],photo_14:[6,7],photo_15:[6,7],photo_1:[6,7],photo_2:[6,7],photo_3:[6,7],photo_4:[6,7],photo_5:[6,7],photo_6:[6,7],photo_7:[6,7],photo_8:[6,7],photo_9:[6,7],photo_main:[6,7],pizza:0,plot:6,portal:[6,8],post:[0,2,6],post_ad:[2,3,4],postadsconfig:6,postcod:[6,7],price:[6,7],profil:8,properti:[6,8],provid:8,publish:6,py:6,queri:[0,2,6,8],queryset:[6,8],rais:0,rampura:6,read:[0,6,8],real:8,realtor:[4,6,7],realtor_id:6,realtoradmin:8,realtorlistview:8,realtorsconfig:8,realtorseri:8,realtorview:8,reason:6,relat:[0,1,3,6,7,8],related_nam:[0,6,8],rent:6,repres:6,represent:0,request:[0,2],required_field:0,respons:[0,6],rest_framework:[0,2,6,8],retern:6,retriev:8,retrieveapiview:[6,8],revers:[0,8],reversemanytoonedescriptor:[0,8],s:0,sale:6,sale_typ:[6,7],saletyp:6,search:4,search_field:[6,8],seller:8,serial:5,serializer_class:[2,6,8],set:[2,6],shortcut:8,show:[6,8],side:[0,6,8],signup:0,signupview:0,singl:8,slug:[6,7],some:2,sourc:[0,1,2,3,6,7,8,9],specif:6,sq:6,sqft:[6,7],state:[6,7],stop:6,string:0,subclass:6,submodul:5,subpackag:5,succ:0,superus:0,test:5,textchoic:6,textfield:[7,9],thi:[0,2,6,8],time:[0,6,8],titl:[6,7],top:[0,8],top_sel:[8,9],topsellerview:8,type:[0,2,6],uddan:6,url:5,us:[0,8],user:[0,6],user_permiss:[0,1],useraccount:[0,1],useraccountmanag:0,usernam:0,username_field:0,valu:[0,6,8],valueerror:0,via:6,view:5,well:6,when:[0,6,8],which:6,width:[6,8],width_field:[6,8],without:6,wrapper:[0,6,8]},titles:["accounts package","accounts.migrations package","filter_ads package","filter_ads.migrations package","Welcome to Real Estate Web Application\u2019s documentation!","accounts","post_ads package","post_ads.migrations package","realtors package","realtors.migrations package"],titleterms:{"0001_initi":[1,3,7,9],"0002_delete_ad":3,account:[0,1,5],admin:[0,2,6,8],app:[0,2,6,8],applic:4,content:[0,1,2,3,4,6,7,8,9],document:4,estat:4,filter_ad:[2,3,5],indic:4,migrat:[1,3,7,9],model:[0,2,6,8],modul:[0,1,2,3,6,7,8,9],packag:[0,1,2,3,6,7,8,9],post_ad:[5,6,7],real:4,realtor:[5,8,9],s:4,serial:[2,6,8],submodul:[0,1,2,3,6,7,8,9],subpackag:[0,2,6,8],tabl:4,test:[0,2,6,8],url:[0,2,6,8],view:[0,2,6,8],web:4,welcom:4}})