Search.setIndex({docnames:["README","image_classification","index","keypoint_detection","matting","object_detection","ocr","semantic_segmentation","vision_results_cn","vision_results_en"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["README.md","image_classification.md","index.rst","keypoint_detection.md","matting.md","object_detection.md","ocr.md","semantic_segmentation.md","vision_results_cn.md","vision_results_en.md"],objects:{"fastdeploy.vision.classification":[[1,0,1,"","PaddleClasModel"],[1,0,1,"","ResNet"],[1,0,1,"","YOLOv5Cls"]],"fastdeploy.vision.classification.PaddleClasModel":[[1,1,1,"","predict"]],"fastdeploy.vision.classification.ResNet":[[1,2,1,"","mean_vals"],[1,1,1,"","predict"],[1,2,1,"","size"],[1,2,1,"","std_vals"]],"fastdeploy.vision.classification.YOLOv5Cls":[[1,1,1,"","predict"],[1,2,1,"","size"]],"fastdeploy.vision.detection":[[5,0,1,"","FasterRCNN"],[5,0,1,"","MaskRCNN"],[5,0,1,"","PPYOLO"],[5,0,1,"","PPYOLOE"],[5,0,1,"","PPYOLOv2"],[5,0,1,"","PaddleYOLOX"],[5,0,1,"","PicoDet"]],"fastdeploy.vision.detection.FasterRCNN":[[5,1,1,"","predict"]],"fastdeploy.vision.detection.PPYOLO":[[5,1,1,"","predict"]],"fastdeploy.vision.detection.PPYOLOE":[[5,1,1,"","predict"]],"fastdeploy.vision.detection.PPYOLOv2":[[5,1,1,"","predict"]],"fastdeploy.vision.detection.PaddleYOLOX":[[5,1,1,"","predict"]],"fastdeploy.vision.detection.PicoDet":[[5,1,1,"","predict"]],"fastdeploy.vision.keypointdetection":[[3,0,1,"","PPTinyPose"]],"fastdeploy.vision.keypointdetection.PPTinyPose":[[3,1,1,"","predict"],[3,2,1,"","use_dark"]],"fastdeploy.vision.ocr":[[6,0,1,"","Classifier"],[6,0,1,"","DBDetector"],[6,0,1,"","PPOCRv2"],[6,0,1,"","PPOCRv3"],[6,0,1,"","Recognizer"]],"fastdeploy.vision.ocr.PPOCRv2":[[6,1,1,"","predict"]],"fastdeploy.vision.ocr.PPOCRv3":[[6,1,1,"","predict"]],"fastdeploy.vision.segmentation":[[7,0,1,"","PaddleSegModel"]],"fastdeploy.vision.segmentation.PaddleSegModel":[[7,2,1,"","apply_softmax"],[7,2,1,"","is_vertical_screen"],[7,1,1,"","predict"]]},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","property","Python property"]},objtypes:{"0":"py:class","1":"py:method","2":"py:property"},terms:{"0":[8,9],"0_cls_infer":6,"1":[1,3,5,6,7,8,9],"2":[1,8,9],"255":[8,9],"3":[1,3,5,6,7,8,9],"4":9,"5":9,"8":9,"\u4e00\u4e2a\u76ee\u6807\u7684\u5173\u952e\u70b9\u6570\u91cf":8,"\u4e00\u81f4":8,"\u4e0d\u662f\u4e00\u5b9a\u6709\u7684":8,"\u4e0elabel_map\u4e00\u4e00\u5bf9\u5e94\u7684\u6240\u9884\u6d4b\u7684\u5206\u5272\u7c7b\u522b\u6982\u7387\u503c":8,"\u4e2d":8,"\u4e3a":8,"\u4e3a\u9884\u6d4b\u7684\u524d\u666f":8,"\u4e3a\u9884\u6d4b\u7684alpha\u900f\u660e\u5ea6\u7684\u503c":8,"\u4eba\u8138landmark":8,"\u4ee3\u7801\u5b9a\u4e49\u5728":8,"\u4ee5\u53ca\u6587\u672c\u6846\u5185\u7684\u6587\u672c\u5185\u5bb9":8,"\u4f8b\u5982\u53ef\u4ee5\u8fd4\u56de":8,"\u503c\u57df\u4e3a":8,"\u5176\u4e2a\u6570\u6839\u636e\u5728\u4f7f\u7528\u5206\u7c7b\u6a21\u578b\u65f6\u4f20\u5165\u7684":8,"\u5176\u5143\u7d20\u4e2a\u6570\u4e0e":8,"\u5176\u5143\u7d20\u4e2a\u6570\u53cashape\u5927\u5c0f\u4e0eboxes\u4e00\u81f4":8,"\u5176\u6bcf\u4e2a\u5143\u7d20\u4e3a\u4e00\u4e2a\u957f\u5ea6\u4e3a4\u7684list":8,"\u51b3\u5b9a":8,"\u5373\u5de6\u4e0a\u89d2\u548c\u53f3\u4e0b\u89d2\u5750\u6807":8,"\u53ea\u6709\u6a21\u578b\u672c\u8eab\u9884\u6d4b\u4e86\u524d\u666f":8,"\u53ef\u4ee5\u7528\u6765\u8ba1\u7b97\u4eba\u8138\u4e4b\u95f4\u7684\u7279\u5f81\u76f8\u4f3c\u5ea6":8,"\u53f3\u4e0a":8,"\u53f3\u4e0b":8,"\u540c\u65f6\u6a21\u578b\u521d\u59cb\u5316\u7684\u65f6\u5019\u8bbe\u7f6e\u6a21\u578b\u7c7b\u6210\u5458\u5c5e\u6027":8,"\u56fe\u7247\u4e2d\u7684\u76ee\u6807\u6570\u91cf":8,"\u5750\u6807\u4fe1\u606f":[8,9],"\u5982":8,"\u5b9e\u4f8b\u5206\u5272\u6a21\u578b\u7684\u7ed3\u679c\u6b64\u9879\u4e00\u822c\u4e3a":8,"\u5de6\u4e0a":8,"\u5f53":8,"\u5f53\u5bfc\u51fa\u6a21\u578b\u65f6\u6307\u5b9a":8,"\u6210\u5458\u53d8\u91cf":8,"\u6216\u8005\u5bfc\u51fa\u6a21\u578b\u65f6\u6307\u5b9a":8,"\u6216\u8005\u7ecf\u8fc7softmax\u5f52\u4e00\u5316\u5316\u540e\u7684\u6982\u7387\u503c":8,"\u6587\u672c\u6846\u65b9\u5411\u5206\u7c7b":8,"\u662f\u4e00\u7ef4\u5411\u91cf":8,"\u672c\u6587\u6863\u7684\u4e2d\u6587\u7248\u672c\u53c2\u8003":9,"\u6bcf\u4e2a\u6846\u4ee54\u4e2afloat\u6570\u503c\u4f9d\u6b21\u8868\u793axmin":8,"\u6bcf\u4e2a\u6846\u4ee58\u4e2aint\u6570\u503c\u4f9d\u6b21\u8868\u793a\u6846\u76844\u4e2a\u5750\u6807\u70b9":8,"\u7528\u4e8e\u8868\u660e\u4eba\u8138\u68c0\u6d4b\u51fa\u6765\u7684\u76ee\u6807\u6846":8,"\u7528\u4e8e\u8868\u660e\u4eba\u8138\u8bc6\u522b\u6a21\u578b\u5bf9\u56fe\u50cf\u7279\u5f81\u7684embed":8,"\u7528\u4e8e\u8868\u660e\u56fe\u50cf\u4e2d\u6bcf\u4e2a\u50cf\u7d20\u9884\u6d4b\u51fa\u6765\u7684\u5206\u5272\u7c7b\u522b\u548c\u5206\u5272\u7c7b\u522b\u7684\u6982\u7387\u503c":8,"\u7528\u4e8e\u8868\u660e\u56fe\u50cf\u4e2d\u76ee\u6807\u884c\u4e3a\u7684\u5404\u4e2a\u5173\u952e\u70b9\u5750\u6807\u548c\u7f6e\u4fe1\u5ea6":8,"\u7528\u4e8e\u8868\u660e\u56fe\u50cf\u68c0\u6d4b\u51fa\u6765\u7684\u76ee\u6807\u6846":8,"\u7528\u4e8e\u8868\u660e\u56fe\u50cf\u68c0\u6d4b\u548c\u8bc6\u522b\u51fa\u6765\u7684\u6587\u672c\u6846":8,"\u7528\u4e8e\u8868\u660e\u56fe\u50cf\u7684\u5206\u7c7b\u7ed3\u679c\u548c\u7f6e\u4fe1\u5ea6":8,"\u7528\u4e8e\u8868\u660e\u6a21\u578b\u9884\u6d4b\u7684alpha\u900f\u660e\u5ea6\u7684\u503c":8,"\u7684\u5206\u7c7b\u7ed3\u679c":8,"\u7684\u5206\u7c7b\u7f6e\u4fe1\u5ea6":8,"\u76ee\u6807\u7c7b\u522b\u548c\u76ee\u6807\u7f6e\u4fe1\u5ea6":8,"\u76ee\u6807\u7f6e\u4fe1\u5ea6\u548c\u6bcf\u5f20\u4eba\u8138\u7684landmark\u6570\u91cf":8,"\u8868\u793a\u4e00\u4e2a\u76ee\u6807\u7684\u5173\u952e\u70b9\u6570\u91cf":8,"\u8868\u793a\u4e3a\u4e00\u4e2a\u6846":8,"\u8868\u793a\u4eba\u8138\u8bc6\u522b\u6a21\u578b\u6700\u7ec8\u63d0\u53d6\u7684\u7279\u5f81embed":8,"\u8868\u793a\u5355\u5f20\u56fe\u5185\u68c0\u6d4b\u51fa\u7684\u6846\u7684\u4e2a\u6570":8,"\u8868\u793a\u5355\u5f20\u56fe\u7247\u5728\u76f8\u5e94\u5206\u7c7b\u7ed3\u679c\u4e0a\u7684\u7f6e\u4fe1\u5ea6":8,"\u8868\u793a\u5355\u5f20\u56fe\u7247\u68c0\u6d4b\u51fa\u6765\u7684\u6240\u6709\u4eba\u8138\u7684\u5173\u952e\u70b9":8,"\u8868\u793a\u5355\u5f20\u56fe\u7247\u68c0\u6d4b\u51fa\u6765\u7684\u6240\u6709\u5b9e\u4f8bmask":8,"\u8868\u793a\u5355\u5f20\u56fe\u7247\u68c0\u6d4b\u51fa\u6765\u7684\u6240\u6709\u76ee\u6807\u6846\u5750\u6807":8,"\u8868\u793a\u5355\u5f20\u56fe\u7247\u68c0\u6d4b\u51fa\u6765\u7684\u6240\u6709\u76ee\u6807\u7c7b\u522b":8,"\u8868\u793a\u5355\u5f20\u56fe\u7247\u68c0\u6d4b\u51fa\u6765\u7684\u6240\u6709\u76ee\u6807\u7f6e\u4fe1\u5ea6":8,"\u8868\u793a\u5355\u5f20\u56fe\u7247\u6bcf\u4e2a\u50cf\u7d20\u70b9\u7684\u5206\u5272\u7c7b\u522b":8,"\u8868\u793a\u5355\u5f20\u56fe\u7247\u7684\u5206\u7c7b\u7ed3\u679c":8,"\u8868\u793a\u591a\u4e2a\u6587\u672c\u6846\u5185\u88ab\u8bc6\u522b\u51fa\u6765\u7684\u6587\u672c\u5185\u5bb9":8,"\u8868\u793a\u6587\u672c\u6846\u5185\u8bc6\u522b\u51fa\u6765\u7684\u6587\u672c\u7684\u7f6e\u4fe1\u5ea6":8,"\u8868\u793a\u6587\u672c\u6846\u7684\u5206\u7c7b\u7ed3\u679c\u7684\u7f6e\u4fe1\u5ea6":8,"\u8868\u793a\u6587\u672c\u6846\u7684\u65b9\u5411\u5206\u7c7b\u7c7b\u522b":8,"\u8868\u793a\u68c0\u6d4b\u5230\u7684\u4e00\u4e2amask":8,"\u8868\u793a\u68c0\u6d4b\u7ed3\u679c\u4e2d\u662f\u5426\u5305\u542b\u5b9e\u4f8bmask":8,"\u8868\u793a\u6bcf\u4e2a\u4eba\u8138\u6846\u4e2d\u7684\u5173\u952e\u70b9\u7684\u6570\u91cf":8,"\u8868\u793a\u8bc6\u522b\u5230\u7684\u76ee\u6807\u884c\u4e3a\u7684\u5173\u952e\u70b9\u5750\u6807":8,"\u8868\u793a\u8bc6\u522b\u5230\u7684\u76ee\u6807\u884c\u4e3a\u7684\u5173\u952e\u70b9\u5750\u6807\u7684\u7f6e\u4fe1\u5ea6":8,"\u8868\u793a\u8f93\u51fa\u56fe\u7247\u7684\u5c3a\u5bf8":8,"\u8868\u793a\u8f93\u51fa\u7ed3\u679c\u7684shape":8,"\u8868\u793a\u9884\u6d4b\u7684\u7ed3\u679c\u662f\u5426\u5305\u542b\u524d\u666f":8,"\u8868\u793amask\u7684\u5c3a\u5bf8":8,"\u89c6\u89c9\u6a21\u578b\u9884\u6d4b\u7ed3\u679c\u8bf4\u660e":9,"\u8be5\u7ed3\u679c\u8fd4\u56de":8,"\u8fd9\u4e2a\u5c5e\u6027\u624d\u4f1a\u6709\u6548":8,"\u957f\u5ea6\u4e3a":8,"\u987a\u5e8f\u4e3a\u5de6\u4e0b":8,"\u9884\u6d4b\u7684\u524d\u666f\u7b49":8,"boxes\u662f\u4e00\u4e2alist":8,"c\u4e00\u822c\u4e3a3":8,"class":[1,3,5,6,7,9],"classifyresult\u4ee3\u7801\u5b9a\u4e49\u5728":8,"default":[1,3,5,6,7],"detectionresult\u4ee3\u7801\u5b9a\u4e49\u5728":8,"export":[1,3,5,7,9],"final":9,"float":[8,9],"int":[1,8,9],"ocrresult\u4ee3\u7801\u5b9a\u4e49\u5728":8,"return":[1,3,5,6,7,9],"segmentationresult\u4ee3\u7801\u5b9a\u4e49\u5728":8,"shape\u5305\u542b":8,"shape\u53ea\u5305\u542b":8,"short":3,"true":[3,8,9],"w\u4e3a\u8f93\u5165\u56fe\u50cf\u7684\u9ad8\u548c\u5bbd":8,For:9,The:[1,3,5,6,7,9],_build:0,after:0,all:[0,9],alpha:[8,9],an:[1,3,5,6,7],api:[2,8,9],appli:7,apply_softmax:[7,8,9],ar:0,argmax:[8,9],arrai:[1,3,5,6,7],atrribut:[3,7],attribut:9,awar:3,backend:[1,3,5,6,7],baidu:2,behavior:9,being:9,between:9,bgr:[1,3,5,6,7],bool:[3,7,8,9],bottom:9,box:[8,9],browser:0,build:0,c:[8,9],calcul:9,can:[1,3,5,7,9],categori:9,ch_pp:6,ch_ppocr_mobile_v2:6,cl:1,classif:[2,6,9],classifi:1,classifyresult:1,cls_label:[8,9],cls_model:6,cls_score:[8,9],code:[0,9],com:[2,4],command:0,common:[8,9],confid:[1,9],config_fil:[1,3,5,7],configur:[1,3,5,7],consruct:6,contact:2,contain:9,contain_foreground:[8,9],contain_mask:[8,9],content:9,coordin:[3,9],corner:9,correspond:9,cpu:[1,3,5,6,7],creat:6,d:[1,3,5,6,7],dark:3,data:[1,3,5,6,7,8,9],defin:9,depend:0,deploi:[1,7],deploy:[3,5],descript:2,det_model:6,detect:[2,6,9],detectionresult:5,detector:6,determin:9,dimension:9,direct:6,directori:0,distribut:3,document:0,domain:9,done:0,e:[1,3,5,6,7,9],each:9,element:9,embed:[8,9],empti:[1,3,5,7],environ:0,estim:3,etc:9,exampl:9,execut:0,extract:9,face:9,fals:[7,8,9],fastdeploi:[0,8,9],fastdeploymodel:6,featur:9,feedback:2,file:[1,3,5,6,7],first:0,foreground:[8,9],format:[1,3,5,6,7],frame:9,from:9,g:[1,3,5,6,7,9],gener:[0,9],github:2,h:[8,9],height:[7,9],help:0,html:0,http:2,human:3,humanseg:7,hwc:[1,3,5,6,7],i:9,identifi:9,ignor:[1,3,5,6,7],im:[1,3,5,7],imag:[2,3,5,6,7,9],includ:9,index:0,indic:9,infer:[1,3,5,6,7],infer_cfg:[3,5],inference_cl:1,initi:9,input:[1,3,5,6,7,9],input_imag:[1,3,6,7],insid:9,instal:0,instanc:9,is_vertical_screen:7,issu:2,itself:9,j:[8,9],kei:9,keypoint:[2,8,9],keypointdetectionresult:3,label:[6,9],label_id:[8,9],label_map:[8,9],label_path:6,landmark:[8,9],landmarks_per_fac:[8,9],latest:0,layout:[1,3,5,6,7],left:9,length:9,level:9,list:[8,9],load:[1,3,5,6,7],locat:9,lower:9,make:0,mask:[8,9],mat:2,mean:1,mean_val:1,member:9,model:[1,3,5,6,7,9],model_fil:[1,3,5,6,7],model_fomat:[1,3,5,7],model_format:[1,3,5,6,7],modelforamt:[1,3,5,6,7],modelformat:[1,3,5,6,7],multipl:9,n:[8,9],ndarrai:[1,3,5,6,7],necessarili:9,need:0,none:[1,3,5,6,7,8,9],normal:9,normliz:1,num_joint:[8,9],number:9,numpi:[1,3,5,6,7],object:[2,6,9],ocr:2,ocrresult:6,ocrv3_det_inf:6,ocrv3_rec_inf:6,one:9,onli:9,onnx:[1,3,5,6,7],open:0,oper:7,order:9,orient:9,outcom:9,outlook:9,output:9,output_op:[8,9],packag:0,paddl:[1,3,5,6,7],paddlecla:1,paddledetect:[3,5],paddleocr:6,paddlepaddl:2,paddleseg:7,param:[1,3,5,7],paramet:[1,3,5,6,7],params_fil:[1,3,5,6,7],pass:9,path:[1,3,5,6,7],pdiparam:[1,3,5,6,7],pdmodel:[1,3,5,6,7],per:9,pictur:9,pip:0,pipelin:6,pixel:9,point:9,pose:3,postprocess:[3,7],pp:7,ppocr_keys_v1:6,predict:[1,3,5,6,7,9],preprocess:1,probabl:9,properti:[1,3,7,9],provid:6,r:0,rang:9,rec_model:6,rec_scor:[8,9],recogn:9,recognit:[6,9],refer:0,repositori:2,repres:9,represent:3,requir:0,resnet50:1,result:[1,2,7,8],right:9,runtime_opt:[1,3,5,6,7],runtimeopt:[1,3,5,6,7],s:[1,3,5,6,7],same:9,score:[1,8,9],score_map:[8,9],segment:[2,9],segmentationresult:7,semant:2,set:[1,3,5,7,9],shape:[8,9],similar:9,singl:9,size:[1,8,9],socr:9,softmax:[7,8,9],some:0,soon:4,sourc:[1,3,5,6,7],specifi:9,state:[3,7],std:1,std_val:1,step:0,str:[1,3,5,6,7],string:[1,3,5,7,8,9],target:9,text:[6,8,9],thi:[0,1,3,5,6,7,9],top5:8,top:9,topk:[1,8,9],transpar:9,ttommon:8,txt:[0,6],unet:7,upper:9,us:[0,1,2,3,5,6,7,9],use_dark:3,valid:9,valu:[1,3,7,9],variabl:9,vector:9,vertic:7,vision:[2,8],w:[8,9],wheel:0,when:9,whether:[3,7,9],which:9,width:[7,9],www:2,x:[8,9],xmax:[8,9],xmin:9,y:[8,9],yaml:1,ymax:[8,9],ymin:[8,9],yml:[3,5,7],yolov5:1,yolov5n:1,yolox:5,you:[0,9],your:0},titles:["Python API","Image Classification API","FastDeploy","Keypoint Detection API","Matting API","Object Detection API","OCR API","Semantic Segmentation API","\u89c6\u89c9\u6a21\u578b\u9884\u6d4b\u7ed3\u679c\u8bf4\u660e","Description of Vision Results"],titleterms:{"\u6587\u6863\u76ee\u5f55":2,"\u89c6\u89c9\u6a21\u578b\u9884\u6d4b\u7ed3\u679c\u8bf4\u660e":8,api:[0,1,3,4,5,6,7],classif:1,classifi:6,classifyresult:[8,9],dbdetector:6,descript:9,detect:[3,5],detectionresult:[8,9],facedetectionresult:[8,9],facerecognitionresult:[8,9],fastdeploi:[1,2,3,5,6,7],fasterrcnn:5,imag:1,keypoint:3,keypointdetect:3,keypointdetectionresult:[8,9],maskrcnn:5,mat:4,mattingresult:[8,9],object:5,ocr:6,ocrresult:[8,9],paddleclasmodel:1,paddlesegmodel:7,paddleyolox:5,picodet:5,ppocrv2:6,ppocrv3:6,pptinypos:3,ppyolo:5,ppyolov2:5,python:0,recogn:6,resnet:1,result:9,segment:7,segmentationresult:[8,9],semant:7,vision:[1,3,5,6,7,9],yolov3:5,yolov5cl:1}})