Search.setIndex({docnames:["aizynthfinder","aizynthfinder.context","aizynthfinder.interfaces","aizynthfinder.mcts","aizynthfinder.tools","aizynthfinder.training","aizynthfinder.utils","cli","configuration","gui","index","modules","python_interface","relationships","scoring","sequences","stocks","training"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["aizynthfinder.rst","aizynthfinder.context.rst","aizynthfinder.interfaces.rst","aizynthfinder.mcts.rst","aizynthfinder.tools.rst","aizynthfinder.training.rst","aizynthfinder.utils.rst","cli.rst","configuration.rst","gui.rst","index.rst","modules.rst","python_interface.rst","relationships.rst","scoring.rst","sequences.rst","stocks.rst","training.rst"],objects:{"":{aizynthfinder:[0,0,0,"-"]},"aizynthfinder.aizynthfinder":{AiZynthFinder:[0,1,1,""]},"aizynthfinder.aizynthfinder.AiZynthFinder":{build_routes:[0,2,1,""],extract_statistics:[0,2,1,""],prepare_tree:[0,2,1,""],run_from_json:[0,2,1,""],target_mol:[0,2,1,""],target_smiles:[0,2,1,""],tree_search:[0,2,1,""]},"aizynthfinder.analysis":{ReactionTree:[0,1,1,""],RouteCollection:[0,1,1,""],TreeAnalysis:[0,1,1,""]},"aizynthfinder.analysis.ReactionTree":{depth:[0,2,1,""],from_analysis:[0,2,1,""],from_dict:[0,2,1,""],leafs:[0,2,1,""],molecules:[0,2,1,""],reactions:[0,2,1,""],to_dict:[0,2,1,""],to_image:[0,2,1,""],to_json:[0,2,1,""]},"aizynthfinder.analysis.RouteCollection":{compute_scores:[0,2,1,""],dict_with_scores:[0,2,1,""],dicts:[0,2,1,""],from_analysis:[0,2,1,""],images:[0,2,1,""],jsons:[0,2,1,""],make_dicts:[0,2,1,""],make_images:[0,2,1,""],make_jsons:[0,2,1,""],rescore:[0,2,1,""]},"aizynthfinder.analysis.TreeAnalysis":{best_node:[0,2,1,""],sort_nodes:[0,2,1,""],tree_statistics:[0,2,1,""]},"aizynthfinder.chem":{Molecule:[0,1,1,""],MoleculeException:[0,3,1,""],Reaction:[0,1,1,""],RetroReaction:[0,1,1,""],TreeMolecule:[0,1,1,""],UniqueMolecule:[0,1,1,""]},"aizynthfinder.chem.Molecule":{basic_compare:[0,2,1,""],fingerprint:[0,2,1,""],has_atom_mapping:[0,2,1,""],inchi:[0,2,1,""],inchi_key:[0,2,1,""],make_unique:[0,2,1,""],remove_atom_mapping:[0,2,1,""],sanitize:[0,2,1,""]},"aizynthfinder.chem.Reaction":{apply:[0,2,1,""],products:[0,2,1,""],rd_reaction:[0,2,1,""],rd_reaction_from_smiles:[0,2,1,""],reaction_smiles:[0,2,1,""],smiles:[0,2,1,""]},"aizynthfinder.chem.RetroReaction":{apply:[0,2,1,""],copy:[0,2,1,""],fingerprint:[0,2,1,""],from_reaction_smiles:[0,2,1,""],reactants:[0,2,1,""]},"aizynthfinder.context":{collection:[1,0,0,"-"],config:[1,0,0,"-"],policy:[1,0,0,"-"],scoring:[1,0,0,"-"],stock:[1,0,0,"-"]},"aizynthfinder.context.collection":{ContextCollection:[1,1,1,""]},"aizynthfinder.context.collection.ContextCollection":{deselect:[1,2,1,""],items:[1,2,1,""],load:[1,2,1,""],load_from_config:[1,2,1,""],select:[1,2,1,""],select_all:[1,2,1,""],select_first:[1,2,1,""],selection:[1,2,1,""]},"aizynthfinder.context.config":{Configuration:[1,1,1,""]},"aizynthfinder.context.config.Configuration":{from_dict:[1,2,1,""],from_file:[1,2,1,""],update:[1,2,1,""]},"aizynthfinder.context.policy":{ExpansionPolicy:[1,1,1,""],FilterPolicy:[1,1,1,""],PolicyException:[1,3,1,""]},"aizynthfinder.context.policy.ExpansionPolicy":{get_actions:[1,2,1,""],load:[1,2,1,""],load_from_config:[1,2,1,""]},"aizynthfinder.context.policy.FilterPolicy":{is_feasible:[1,2,1,""],load:[1,2,1,""],load_from_config:[1,2,1,""]},"aizynthfinder.context.scoring":{AverageTemplateOccurenceScorer:[1,1,1,""],NumberOfPrecursorsInStockScorer:[1,1,1,""],NumberOfPrecursorsScorer:[1,1,1,""],NumberOfReactionsScorer:[1,1,1,""],Scorer:[1,1,1,""],ScorerCollection:[1,1,1,""],ScorerException:[1,3,1,""],StateScorer:[1,1,1,""]},"aizynthfinder.context.scoring.Scorer":{sort:[1,2,1,""]},"aizynthfinder.context.scoring.ScorerCollection":{load:[1,2,1,""],load_from_config:[1,2,1,""],names:[1,2,1,""],objects:[1,2,1,""]},"aizynthfinder.context.stock":{InMemoryInchiKeyQuery:[1,1,1,""],MongoDbInchiKeyQuery:[1,1,1,""],Stock:[1,1,1,""],StockException:[1,3,1,""]},"aizynthfinder.context.stock.InMemoryInchiKeyQuery":{stock_inchikeys:[1,2,1,""]},"aizynthfinder.context.stock.MongoDbInchiKeyQuery":{availability_string:[1,2,1,""]},"aizynthfinder.context.stock.Stock":{availability_string:[1,2,1,""],exclude:[1,2,1,""],load:[1,2,1,""],load_from_config:[1,2,1,""],reset_exclusion_list:[1,2,1,""],select:[1,2,1,""],smiles_in_stock:[1,2,1,""]},"aizynthfinder.interfaces":{aizynthapp:[2,0,0,"-"],aizynthcli:[2,0,0,"-"]},"aizynthfinder.interfaces.aizynthapp":{AiZynthApp:[2,1,1,""],main:[2,4,1,""]},"aizynthfinder.interfaces.aizynthapp.AiZynthApp":{setup:[2,2,1,""]},"aizynthfinder.interfaces.aizynthcli":{main:[2,4,1,""]},"aizynthfinder.mcts":{mcts:[3,0,0,"-"],node:[3,0,0,"-"],state:[3,0,0,"-"]},"aizynthfinder.mcts.mcts":{SearchTree:[3,1,1,""]},"aizynthfinder.mcts.mcts.SearchTree":{backpropagate:[3,2,1,""],from_json:[3,2,1,""],graph:[3,2,1,""],route_to_node:[3,2,1,""],select_leaf:[3,2,1,""],serialize:[3,2,1,""]},"aizynthfinder.mcts.node":{Node:[3,1,1,""],NodeUnexpectedBehaviourException:[3,3,1,""]},"aizynthfinder.mcts.node.Node":{backpropagate:[3,2,1,""],children:[3,2,1,""],children_view:[3,2,1,""],create_root:[3,2,1,""],expand:[3,2,1,""],from_dict:[3,2,1,""],is_terminal:[3,2,1,""],promising_child:[3,2,1,""],serialize:[3,2,1,""]},"aizynthfinder.mcts.state":{State:[3,1,1,""]},"aizynthfinder.mcts.state.State":{from_dict:[3,2,1,""],score:[3,2,1,""],serialize:[3,2,1,""],stock_availability:[3,2,1,""],to_image:[3,2,1,""]},"aizynthfinder.tools":{cat_output:[4,0,0,"-"],download_public_data:[4,0,0,"-"],make_stock:[4,0,0,"-"]},"aizynthfinder.tools.cat_output":{main:[4,4,1,""]},"aizynthfinder.tools.download_public_data":{main:[4,4,1,""]},"aizynthfinder.tools.make_stock":{extract_plain_smiles:[4,4,1,""],extract_smiles_from_module:[4,4,1,""],main:[4,4,1,""],make_hdf5_stock:[4,4,1,""],make_mongo_stock:[4,4,1,""]},"aizynthfinder.training":{keras_models:[5,0,0,"-"],make_false_products:[5,0,0,"-"],preprocess_expansion:[5,0,0,"-"],preprocess_filter:[5,0,0,"-"],preprocess_recommender:[5,0,0,"-"],training:[5,0,0,"-"],utils:[5,0,0,"-"]},"aizynthfinder.training.keras_models":{ExpansionModelSequence:[5,1,1,""],FilterModelSequence:[5,1,1,""],train_expansion_keras_model:[5,4,1,""],train_filter_keras_model:[5,4,1,""],train_recommender_keras_model:[5,4,1,""]},"aizynthfinder.training.keras_models.ExpansionModelSequence":{on_epoch_end:[5,2,1,""]},"aizynthfinder.training.keras_models.FilterModelSequence":{on_epoch_end:[5,2,1,""]},"aizynthfinder.training.make_false_products":{main:[5,4,1,""],random_application:[5,4,1,""],recommender_application:[5,4,1,""],strict_application:[5,4,1,""]},"aizynthfinder.training.preprocess_expansion":{main:[5,4,1,""]},"aizynthfinder.training.preprocess_filter":{main:[5,4,1,""]},"aizynthfinder.training.preprocess_recommender":{main:[5,4,1,""]},"aizynthfinder.training.training":{main:[5,4,1,""]},"aizynthfinder.training.utils":{Config:[5,1,1,""],create_reactants_molecules:[5,4,1,""],is_sanitizable:[5,4,1,""],reactants_to_fingerprint:[5,4,1,""],reaction_hash:[5,4,1,""],reaction_to_fingerprints:[5,4,1,""],reverse_template:[5,4,1,""],smiles_to_fingerprint:[5,4,1,""],split_and_save_data:[5,4,1,""]},"aizynthfinder.training.utils.Config":{filename:[5,2,1,""]},"aizynthfinder.utils":{files:[6,0,0,"-"],image:[6,0,0,"-"],keras_utils:[6,0,0,"-"],logging:[6,0,0,"-"],paths:[6,0,0,"-"],serialization:[6,0,0,"-"]},"aizynthfinder.utils.files":{cat_hdf_files:[6,4,1,""],split_file:[6,4,1,""],start_processes:[6,4,1,""]},"aizynthfinder.utils.image":{GraphvizReactionGraph:[6,1,1,""],crop_image:[6,4,1,""],draw_rounded_rectangle:[6,4,1,""],molecule_to_image:[6,4,1,""]},"aizynthfinder.utils.image.GraphvizReactionGraph":{add_edge:[6,2,1,""],add_molecule:[6,2,1,""],add_reaction:[6,2,1,""],to_image:[6,2,1,""]},"aizynthfinder.utils.keras_utils":{LocalKerasModel:[6,1,1,""]},"aizynthfinder.utils.keras_utils.LocalKerasModel":{predict:[6,2,1,""]},"aizynthfinder.utils.logging":{logger:[6,4,1,""],setup_logger:[6,4,1,""]},"aizynthfinder.utils.paths":{data_path:[6,4,1,""],package_path:[6,4,1,""]},"aizynthfinder.utils.serialization":{MoleculeDeserializer:[6,1,1,""],MoleculeSerializer:[6,1,1,""]},"aizynthfinder.utils.serialization.MoleculeSerializer":{store:[6,2,1,""]},aizynthfinder:{aizynthfinder:[0,0,0,"-"],analysis:[0,0,0,"-"],chem:[0,0,0,"-"],context:[1,0,0,"-"],interfaces:[2,0,0,"-"],mcts:[3,0,0,"-"],tools:[4,0,0,"-"],training:[5,0,0,"-"],utils:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","exception","Python exception"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:exception","4":"py:function"},terms:{"03d":7,"9b00286":17,"abstract":[0,1],"break":[10,15],"case":1,"class":[0,1,2,3,4,5,6,9,10,12,14,15,16],"default":[0,1,2,3,5,6,7,8,17],"export":[15,16],"final":[15,17],"float":[0,3],"function":[0,4,6,9],"import":[2,7,9,10,12,14,16,17],"int":[0,3,5,6],"long":17,"new":[0,3,5,6,9,15],"public":0,"return":[0,1,3,5,6,8,14,15,16],"static":3,"true":[0,1,2,3,8,15],"try":0,"while":15,And:[1,17],Are:17,For:[14,15,17],Not:1,One:[1,9],That:7,The:[0,1,3,4,5,6,7,8,9,10,12,14,15,16,17],Then:16,There:[10,17],These:[8,13,15,17],Used:15,Will:[0,3,17],__contains__:[1,16],__len__:[1,16],__repr__:14,_config:14,_inmemorysequ:5,_raw_template_librari:17,_score_nod:14,_score_reaction_tre:14,abc:1,about:[7,10,15],abov:[8,14,15,17],abs:17,absolut:5,access:[0,3],accomplish:17,accpt:1,accumul:8,acd:10,acs:17,action:[1,3,15],actual:[0,1,3,15,17],add:[1,3,6,9,15,16,17],add_edg:6,add_molecul:6,add_react:6,added:[0,3,14],addendum:10,adding:16,addit:[8,14],advanc:2,after:0,again:15,aid:15,aizynth_train:[5,17],aizynthapp:[0,9,10,11,14,16],aizynthcli:[0,7,10,11,16],aizynthfind:[7,9,12,14,15,16,17],aizynthfinderfind:14,algorithm:[0,3,10,12,15,17],all:[0,1,3,4,5,6,7,8,10,12,15,17],all_scor:0,all_tre:7,along:1,alreadi:3,also:[0,1,9,15,17],altern:[0,16],although:3,alwai:12,among:1,an_item:1,analys:12,analysi:[7,11,12],analyz:2,ani:[1,12,14,15,16],anoth:[0,9,17],anyth:15,api:0,app:[2,9,10,14,16],appear:[9,10],append:1,appli:[0,1,3,5,15],applic:[3,6,15,17],arc_siz:6,arg:5,argument:[0,1,4,5,6,7,10,16,17],around:[0,6],arrai:[5,17],associ:[0,1,15],atom:[0,5],attribut:[0,1,3,14],auto:[1,10],automat:[9,14,16],avail:[1,3,7,8,14,17],availability_str:1,averag:1,averagetemplateoccurencescor:1,awai:0,awesomescor:1,background:6,backpropag:[3,15],balanc:8,bar:0,base:[0,1,2,3,5,6,9,10,16],bash:16,basic:[0,2],basic_compar:0,batch:[5,7,10,17],batch_siz:[5,17],becaus:[0,17],been:[0,3,8,9,15],befor:[0,12],behav:3,being:15,below:[8,15,17],best:0,best_nod:0,between:[3,6,12,15],bipartit:0,bool:[0,1,2,3,5],both:[1,3,14,16],bound:[8,15],bring:9,broken:[0,8],brows:9,build:[0,12],build_rout:[0,12],button:[9,10],c1n:12,c2cc:10,c3ncon3:12,c4cc:12,cach:3,calcul:0,call:[0,1,5,7,8,10,12,15],can:[0,1,3,5,6,7,8,9,10,12,14,15,16,17],cap:8,capabl:14,care:[6,15],carlo:10,carri:15,cat_aizynth_output:4,cat_hdf_fil:6,cat_output:[0,11],caus:0,cc1cccc:12,cc2:12,cc4:12,ccco:6,cco:1,cell:[9,10],chang:[15,17],check:[1,5,6],checkpoint:[6,8,17],chem:[11,12,16],chemic:0,chemicalreact:0,child:[3,15],children:[0,3,15],children_attr:3,children_view:3,choos:[9,14],chosen:10,classif:17,classmethod:[0,1,3],cli:[2,4],client:[1,16],cmd_callback:6,coc1cccc:10,code:[9,10],collect:[0,4,6,11,14,16],color:[0,6],column:[1,8,17],com:16,comma:1,command:[2,6,10,16],compar:[0,3],compil:6,complet:[0,1,6,8,12],compound:[7,9,16],compund:7,comput:[0,1,5,8,16,17],compute_scor:0,concaten:[4,6],condit:15,confid:[8,15],config:[0,3,5,7,8,9,10,11,12,14,17],config_filenam:5,config_loc:[7,9,10,14,16],configdict:0,configfil:[0,2,9,10,12,16],configur:[0,1,2,3,5,6,7,9,10,12,14,16],connect:[0,13],consid:[0,1,17],consist:[0,3],consol:6,console_level:6,construct:[0,3,5],consult:12,contain:[0,1,2,3,4,5,6,7,8,10,15,16,17],content:[8,11],context:[0,11,14],contextcollect:1,continu:[9,15,16],contrib:16,control:17,converg:17,convert:[0,5],copi:[0,3],corner:6,correspond:[0,1],could:[0,1,3,5,6,8,15],count:[0,15],creat:[0,2,3,5,6,7,8,14,15,16,17],create_reactants_molecul:5,create_root:3,criteria:16,criteriastock:16,crop:6,crop_imag:6,csv:[1,17],ctrl:[9,10],current:[0,1,3,14,15,16],cursor:[0,1,14],custom:[1,4,5],custom_stock:16,customiz:17,cut:8,cutoff:1,cutoff_cumul:8,cutoff_numb:8,cycl:8,data:[0,1,5,6,7,17],data_label:5,data_path:6,databas:[1,4],database_nam:16,datafram:[1,4,5,7],dataset:1,dataset_label:5,deal:0,deeper:12,def:[14,16],default_prior:8,default_train:17,defin:[0,1],del:1,delet:1,delta:14,deltanumberoftransformsscor:14,depend:[15,17],depth:[0,8],descend:1,descript:[8,15],deselect:1,deseri:[3,6],detail:[7,8],determin:[0,1,6],diagram:[13,15],dict:[0,1,3],dict_:3,dict_with_scor:0,dictionari:[0,1,3,6],differ:[0,1,13,15],dig:12,digraph:[0,3],direct:3,directli:[0,1,5,10],directori:[5,6,16,17],disabl:6,disc:5,discard:8,discuss:17,displai:2,docstr:12,document:[1,16],doe:[0,1,15,16],doi:17,don:17,done:[0,1,2,9,12,15,17],dot:6,down:[0,8,10,15],download:16,download_public_data:[0,11],draw:6,draw_rounded_rectangl:6,drop:17,duplic:17,dynam:5,each:[1,3,4,5,6,7,10,15,16,17],easiest:16,edg:[3,6],effici:3,either:[0,3,5,15,16],element:[4,5,16],enabl:7,encapsul:[0,1,3],end:[0,3,5,17],enter:[9,10,15],entri:[0,2,4,5],enumer:[7,16],epoch:[5,17],equal:0,error:[5,6],estim:3,etc:[0,7],evalu:0,even:3,everi:5,exampl:[7,8,10,12,14,16],except:[0,1,3,10],exclud:1,exclude_target_from_stock:8,exclus:1,execut:[0,6,9,10,15],exist:[1,9,15,16],exit:7,expand:[3,8,15],expans:[1,3,5,8,15,17],expansionmodelsequ:5,expansionpolici:1,explain:[13,15,17],exploit:8,explor:[8,9],extent:17,extract:[0,4,9,15,16],extract_plain_smil:4,extract_smil:[4,16],extract_smiles_from_modul:4,extract_statist:[0,9,12],fact:0,fail:[0,15],fals:[0,1,3,5,8,14,15,16],feasibl:1,few:[14,15,17],field:[1,16],file1:16,file2:16,file:[0,1,2,3,4,5,7,9,10,11,12,16,17],file_level:6,file_postfix:5,file_prefix:[5,17],filenam:[1,3,4,5,6,7,12,16,17],filenotfounderror:6,fileobj:16,filepath:5,fill:5,filter:[0,1,5,8,15],filter_cutoff:8,filtermodelsequ:5,filterpolici:1,find:[7,9,12],finder:[2,9,12,14,16],fingerprint:[0,1,5,12,17],finish:9,first:[0,1,4,5,7,9,10,15,16,17],fit:17,flag:[7,15],flow:15,folder:[1,17],follow:[8,9,10,15,17],form:[7,14,15],format:[0,1,8,16,17],formula:0,forward:6,found:[1,3,5,8],fourth:15,fragment:0,frame:6,frame_color:6,frequenc:6,from:[0,1,2,3,4,5,6,7,8,9,10,12,14,15,16,17],from_analysi:0,from_dict:[0,1,3,7],from_fil:1,from_json:3,from_nod:[0,3],from_reaction_smil:0,full:0,full_uspto:[8,10,12,17],full_uspto_model:8,full_uspto_templ:8,fulli:16,furthermor:15,gener:[0,6,17],get:[0,1],get_act:1,give:[0,3,7,12],given:[0,1,3,4,6,7,12,17],graph:[0,3,6],graphviz:6,graphvizreactiongraph:6,green:0,gui:[2,9,10,14],guid:[10,14],had:3,has:[0,3,8,9,15,16,17],has_atom_map:0,hash:[0,5,17],hashabl:[0,3],have:[0,1,3,6,8,12,15,16,17],hdf5:[1,4,6,7,8,10,16,17],hdf:17,header:16,heavyatomcount:16,help:[7,12],helper:6,henc:0,here:[7,8,9,10,12],hfdf5:7,hidden:0,highest:[0,3,15],hold:[0,3,5,9],host:[1,4,16],how:[7,12,13,15],howev:[16,17],http:17,ident:0,idx:6,ignor:[0,1,17],imag:[0,3,7,11],imagefil:7,img:6,immedi:0,immut:3,implement:[1,14,16],in_stock:0,in_stock_color:0,in_stock_list:3,inchi:[0,1,3,4,8,16],inchi_kei:[0,1,4,8,16],inchikei:1,includ:[0,1,17],increas:0,index:[0,1,6,17],indic:[1,17],indirectli:15,individu:[0,1],inform:[0,15],inherit:14,init:15,initi:[0,1,15],inject:17,inmemoryinchikeyqueri:1,inner:15,input:[4,5,6,7,16,17],input_:6,input_dim:5,input_fil:6,input_matrix2:5,input_matrix:5,instanc:[0,1,2,12,14,16,17],instanti:[1,2,3,6,9,10,12,15],instati:2,instead:[0,8],intanti:0,intend:6,interact:12,interest:[12,17],interfac:[0,1,8,10,11,14],intermedi:6,intern:3,interpret:16,introduct:9,involv:13,is_expand:[3,15],is_feas:1,is_sanitiz:5,is_solv:[3,15],is_termin:[3,15],item:[1,6],iter:[0,1,4,6,8,15],iteration_limit:[1,8],itre:7,its:[3,5,7],jcim:17,join:0,json:[0,3,7,10,15],jupyt:[2,9,10,14],just:[10,16],keep:[0,5],kei:[0,1,3,4,6,8,12,16],kept:5,kera:[6,8,17],keras_model:[0,11,17],keras_util:[0,11],keyerror:1,known:[10,16],kwarg:0,label:[1,5,17],label_matrix:5,larg:15,lastli:16,latest:0,layer:6,layout:6,lazi:0,lazili:3,leaf:[0,3,15],least:[0,1,16],len:[1,6,14],length:[0,1,6,14],let:8,level:6,librari:[5,8,10,17],library_head:17,like:[7,8,10,16,17],line:[4,9,10,16],lipinski:16,list:[0,1,3,5,6,7,14,15,17],literatur:15,load:[0,1,4,5,14,16],load_from_config:1,load_zinc:16,local:[6,17],localhost:16,localkerasmodel:[1,6],locat:[1,16],log:[0,7,11],log_prefix:6,log_to_fil:7,logger:6,look:[1,5,12],lookup:16,loop:15,lose:0,lot:17,made:6,main:[0,2,4,5,10,12],make:[4,5],make_dict:0,make_false_product:[0,11,17],make_hdf5_stock:4,make_imag:0,make_json:0,make_mongo_stock:4,make_stock:[0,11],make_uniqu:0,mandatori:17,map:[0,5],margin:6,mark:0,match:5,matric:[5,17],matrix:5,max_transform:[1,3,8,14],maximum:[0,1,3,8,15],mct:[0,8,11],mean:15,memori:[1,4,5,16,17],mention:15,messag:7,meta:0,metadata:[0,17],metadata_head:17,method:[1,2,3,4,5,6,12,14,15,16,17],might:[15,17],min_nod:0,min_return:0,minimum:0,minium:0,miss:8,mode:10,model:[0,1,6,7,8,9,10],modifi:17,modul:[11,12,14,16],mol:[0,1,3,6,16],molcul:0,molecul:[0,1,3,4,5,6,7,8,10,12,16],molecular:3,molecularseri:3,molecule_stor:3,molecule_to_imag:6,moleculedeseri:[3,6],moleculeexcept:0,moleculeseri:6,mongo:[1,4],mongocli:1,mongodb:[1,16],mongodb_stock:16,mongodbinchikeyqueri:1,mont:10,more:[0,1,2,8],morgan:0,most:[3,12,15],mostli:0,multipl:[0,1,7],must:1,my_db:16,my_mol:1,my_polici:8,mymodul:1,mypackag:1,myscor:1,mystock:1,myurl:16,name:[1,4,6,7],nbit:0,nc2ccc:12,ncolumn:3,ndarrai:[0,1,5,6],neato:6,necessari:[0,12],necessarili:0,need:[1,9,10,12,14,16,17],neg:[5,15,17],neither:0,network:[0,1,3,5,6,10,17],networkx:[0,3],neural:[1,5,6,10],never:15,next:0,node1:[1,6],node2:6,node:[0,1,6,8,11,14,15],nodeunexpectedbehaviourexcept:3,none:[0,1,3,4,5,6,15],note:[0,15,17],notebook:[2,10,14],npart:6,nproc:7,number:[0,1,3,5,6,7,8,14,15,16,17],number_of_molecul:1,numberofprecursorsinstockscor:1,numberofprecursorsscor:1,numberofreactionsscor:1,numer:0,numpi:[0,1,5,6],object:[0,1,2,3,5,6,9,13,14,15,16],obtain:[0,1,6],occur:[1,17],off:8,omit:10,on_epoch_end:5,onc:17,one:[0,1,4,7,8,9,10,14,15,16,17],ones:1,onli:[0,1,3,4,5,15,16,17],open:[9,16],oper:0,opposit:[0,15],option:[0,1,2,3,5,6,7,8,16],orang:0,order:[0,1,5,17],org:17,origin:[1,17],other:[0,1,4,7,8,16,17],otherwis:[0,5],out:[7,15],outcom:[0,17],outer:15,output:[1,4,5,6,9,10,16,17],output_dim:5,output_nam:6,output_path:[5,17],output_s:6,over:[0,7],overal:15,overwrit:1,own:[3,12],owner:3,packag:[10,11,16,17],package_path:6,pad:6,page:[12,13,15,17],pair:1,panda:[1,4,5,7,8],param:[0,5],paramet:[0,1,2,3,5,6,8],parent:[0,3,8],pars:0,part:[0,6],particular:3,partli:5,pass:[1,6,15],past:0,path:[0,1,2,3,5,7,8,9,10,11,15,16],path_to_model:1,path_to_templ:1,per:3,perform:[0,6,7,9,10,12],phase:[14,15],pick:15,pictor:0,pictur:15,pil:[0,3,6],plain:[4,16],plan:10,png:7,point:[1,2,4,5,15,17],polici:[0,3,5,6,7,8,9,10,11,12,15],policyexcept:1,poll:6,poll_freq:6,possibl:[7,9,10,15,16,17],post:14,postfix:5,potenti:3,pre:[0,1,5,8,14],precursor:[10,14,15],predecessor:0,predict:[0,1,6],prefix:[6,17],prepare_tre:0,preprocess_expans:[0,11,17],preprocess_filt:[0,11,17],preprocess_recommend:[0,11,17],press:[9,10],pretti:6,prevent:[8,15],print:10,prior:[0,1,3,8],prioriti:0,probabl:[1,8,15],procedur:17,process:[3,5,6,7,14],produc:[0,5,6,15],product:[0,5,17],program:6,progress:0,promis:[3,15],promising_child:[3,15],prompt:10,proper:6,properti:[0,1,3,6,8,9],provid:[1,2,7,8,9,10,12,16,17],proxi:0,prune:17,prune_cycles_in_search:8,pub:17,purchas:[10,14],purpos:15,put:4,pwd:16,pymongo:1,python:16,pythonpath:16,queri:[0,1,16],quick:12,quot:10,radiu:0,rais:[0,1,3,6],raise_except:0,random:[5,17],random_appl:5,rank:[0,7,9,10,15],raw:17,rd_mol:[0,16],rd_reaction:0,rd_reaction_from_smil:0,rdchem:0,rdchemreact:0,rdchiral:17,rdkit:[0,1,16],reach:[3,15],reactant:[0,5,17],reactants_smil:5,reactants_str:5,reactants_to_fingerprint:5,reaction:[0,1,3,5,6,9,10,14,15,17],reaction_hash:[5,17],reaction_smil:0,reaction_to_fingerprint:5,reaction_tre:0,reactiontre:[0,1,7,14],read:[0,1,5,6,7,15],read_hdf:7,readabl:8,readlin:16,real:17,recommend:[5,12],recommender_appl:5,recommender_model:17,record:5,recreat:[3,8],rectangl:6,rectangular:6,recurs:[10,15],refer:[0,9],regardless:1,reject:15,relationship:12,remov:[0,1,6],remove_atom_map:0,replac:0,repo:5,repres:[0,3],represent:[0,3],requir:[1,14,17],rescor:0,reset_exclusion_list:1,respect:16,respons:[0,13],rest:15,result:[0,7,10],retriev:[1,15],retro:[0,17],retro_templ:[5,8,17],retroreact:[0,1,15],retrosynthesi:0,retrosynthet:10,return_first:8,return_prob:1,return_sort_indic:1,revers:5,reverse_templ:5,rollout:15,root:[0,3,15],root_smil:3,round:6,rout:[0,1,3,7,9,10,12,14],route000:7,route001:7,route0:0,route_to_nod:3,routecollect:0,routin:[0,2,4,5,6],row:[1,3,5,7,10,16,17],rtype:5,run:[0,9,10],run_from_json:0,rvalu:0,sai:8,same:[0,1],sanit:0,sanitaion:0,sanitiz:[1,5],save:[4,5,6,7,16],scipi:5,score:[0,3,8,9,10,11,15],scorer:[0,1,14],scorercollect:1,scorerexcept:1,scorers_config:1,script:[10,17],search:[0,1,2,3,4,7,8,9,10,12,14,16,17],search_stat:0,search_tre:0,searchtre:[0,3,15],second:[0,5,8,15,16,17],secondli:16,section:8,see:[7,8,9,10,15,17],select:[0,1,3,8,9,10,12,15,17],select_al:1,select_first:1,select_leaf:[3,15],self:[14,16],separ:1,sequenc:[5,12],seral:3,serial:[0,3,11],set:[0,1,3,5,6,12,15,16,17],setup:[0,2,5,6,14,16],setup_logg:6,sever:[0,1],shallow:0,shell:[12,16],should:[0,1,2,6,8,10,15,16,17],show:[0,7,9,10,13,15],show_al:0,show_progress:0,shown:[8,17],shuffl:5,similar:17,similarli:15,simpl:[0,1,7,9,10,16],simplest:7,simpli:15,simplifi:15,singl:[0,1,7,8,9,10],size:[5,6,17],slice:5,smart:0,smi:16,smile:[0,1,3,4,5,6,7,9,10,12,16,17],smiles2stock:[4,8,16],smiles_in_stock:1,smiles_to_fingerprint:5,snippet:17,sock:1,solut:[0,8],solv:[0,3,15],some:[0,9,10,13,15,17],some_path:17,someth:7,soon:8,sort:[0,1,9,15],sort_nod:0,sourc:[0,1,16],source_tag:4,space:6,spars:5,special:0,specif:6,specifi:[0,1,5,8,10,16],split:[5,6,7,16,17],split_and_save_data:5,split_fil:6,standard:6,start:[6,17],start_process:6,stat:[9,12],state:[0,1,11,14,15],statescor:[0,1],statisc:0,statist:[0,7,10],step:[3,9,10,14,15,17],stereochemistri:0,stock1:8,stock2:8,stock:[0,3,4,7,8,9,10,11,12,14,15],stock_avail:3,stock_db:[1,16],stock_inchikei:1,stockexcept:1,store:[0,1,4,6,10,16],str:[0,1,2,3,5,6],strict:17,strict_appl:5,string:[0,1,3,5,16],strip:16,structur:1,sub:[1,16],sub_stock:1,submodul:11,subpackag:11,subset:16,suffici:0,suggest:[8,10],suppli:7,support:16,suppos:0,swith:5,tabl:[1,6,7,8],tag:16,take:[6,15,16,17],taken:[1,3,4,5,16,17],target:[0,7,8,9,10,12,16,17],target_mol:0,target_smil:[0,12],templat:[0,1,5,8,10,15,17],template_column:8,template_hash:17,templatefil:1,temporari:6,tensorflow:6,termin:[3,7,8,15],test:[5,17],text:[1,4,6,7,10,15,16],than:[0,1,17],thei:[0,3,17],them:[0,3,6,8,12,15,16],themselv:3,therebi:[0,16],therefor:[0,15],thi:[0,1,2,3,6,7,8,9,10,12,13,14,15,16,17],thing:15,third:[15,17],those:1,though:3,three:14,threshold:8,through:9,time:[0,17],time_limit:8,to_dict:0,to_imag:[0,3,6,7],to_json:0,togeth:0,took:1,tool:[0,5,6,7,8,9,10,11,16,17],top:[0,7,9,10,15],train:[0,8,10,11],train_expansion_keras_model:5,train_filter_keras_model:5,train_recommender_keras_model:5,transform:[0,1,3,14,15],travers:3,tree:[0,1,2,3,4,7,8,9,10,12,14,16,17],tree_dict:0,tree_search:[0,12,15],tree_statist:0,treeanalysi:0,treemolecul:[0,3],trees_for_first_target:7,treesearch:15,tupl:[0,1,3,5,6],turn:[15,17],two:[0,8,10,16],txt:[7,10],type:[0,1,3,5,6,7,13,16],typic:2,ucb:15,uncommon:17,under:1,understand:15,unexpand:[3,15],unexpectedli:3,unfamiliar:9,unfeas:17,uniqu:[0,4,8,17],unique_templ:17,uniquemolecul:0,unless:1,until:[3,15],updat:[0,1,3,14,15,17],upon:6,upper:[8,15],usag:[6,7],use:[0,7,8,9,10,14,15,16,17],use_prior:8,used:[0,1,2,5,6,8,13,15,16,17],user:[0,12,16],uses:2,using:[1,3,6,8,9,12,15,16,17],util:[0,10,11],valid:[5,17],valu:[0,1,3,5,7,8,15,17],value_estim:3,valueerror:[0,1],variabl:[0,1,2,3,5,6],variou:[0,1,5,15],vector:[1,5,6,17],veri:17,vertic:3,view:3,visit:[3,15],wai:[3,15,16],wait:6,want:[10,12,17],weight:8,well:16,were:[3,15],what:[1,7,15,17],when:[1,3,7,8,9,10,14,15,17],where:[5,7,9,10,12,16,17],wherea:10,whether:[1,5],which:[6,9,10,15,16,17],white:6,wider:17,widget:2,within:10,without:[0,3],work:6,worth:15,wrapper:0,write:[12,16],written:[7,10],yaml:[0,1,2,5,9,10,17],yield:[0,4,5,16],yml:[1,6,7,8,9,10,12,14,16,17],you:[7,8,9,10,12,16,17],your:[12,17],zinc:[8,12,16],zinc_stock:8},titles:["aizynthfinder package","aizynthfinder.context package","aizynthfinder.interfaces package","aizynthfinder.mcts package","aizynthfinder.tools package","aizynthfinder.training package","aizynthfinder.utils package","Command-line interface","Configuration file","Graphical user interface","aizynthfinder documentation","aizynthfinder","Python interface","Relationships","Scoring","Sequences","Stocks","Training"],titleterms:{"function":14,"new":14,add:14,advanc:8,aizynthapp:2,aizynthcli:2,aizynthfind:[0,1,2,3,4,5,6,10,11],analys:[7,9],analysi:[0,13,15],cat_output:4,chem:0,collect:1,command:7,config:1,configur:[8,17],content:[0,1,2,3,4,5,6],context:1,creat:9,custom:16,databas:16,document:10,download_public_data:4,file:[6,8],filter:17,further:12,graphic:9,imag:6,interfac:[2,7,9,12],introduct:10,keras_model:5,keras_util:6,line:7,log:6,make:16,make_false_product:5,make_stock:4,mct:3,model:17,modul:[0,1,2,3,4,5,6],mongo:16,node:3,notebook:9,output:7,packag:[0,1,2,3,4,5,6],path:6,polici:[1,17],post:[13,15],pre:17,preprocess_expans:5,preprocess_filt:5,preprocess_recommend:5,prerequisit:17,process:[13,15,17],python:12,read:12,recommend:17,relationship:13,result:9,score:[1,14],search:[13,15],sequenc:15,serial:6,simpl:8,state:3,stock:[1,16],submodul:[0,1,2,3,4,5,6],subpackag:0,tool:4,train:[5,17],tree:[13,15],usag:8,user:9,util:[5,6]}})