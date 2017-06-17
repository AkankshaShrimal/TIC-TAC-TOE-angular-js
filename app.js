
angular.module("tickTack",[]).controller("tickCtrl",tickCtrl);


function tickCtrl($window,$timeout)
{

var todo = this;
todo.counter = 0;
todo.values = [0,0,0,0,0,0,0,0,0];
todo.solution = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
todo.divArray = [[0,1,2],[3,4,5],[6,7,8]];
todo.player1 = 0;
todo.player2 = 0;
todo.over = 0;
todo.winningPlayer = "";
todo.result = false;
todo.page1 = true;

var decision_x = false;
var decision_o = false;
var count ;
var error = "ENTER YOUR NAMES BELOW"


todo.home = function()
            {
                todo.values = [0,0,0,0,0,0,0,0,0];
                 decision_x = false;
                decision_o = false;
                todo.counter = 0;
                todo.player1_name ="";
                todo.player2_name = "";
                todo.player1 = 0;
                todo.player2 = 0;
                todo.page1 = true;
                todo.over = 0;
            }

todo.replay = function()
            {
                todo.values = [0,0,0,0,0,0,0,0,0];
                 decision_x = false;
                decision_o = false;
                todo.counter = 0;
                
                todo.player1 = 0;
                todo.player2 = 0;
                todo.page1 = false;
                todo.over = 0;
            }


todo.begin = function()
            {       if(!todo.player1_name || !todo.player2_name)
                    {
                        $window.alert(error);
                    }
                    else
                        todo.page1 = false;
            }   

todo.display = function(t)
                    {   
                       
                       if(!todo.values[t] && todo.counter == 0)
                         {
                             todo.values[t] = 1;
                            todo.counter++;
                            

                         }
                        else if( !todo.values[t] && todo.counter ==1)
                         {
                             todo.values[t] = -1;
                             todo.counter --;
                         }
                            console.log(todo.values);
                            $timeout(todo.calculation,1);
                       
                    } 

todo.calculation = function()
                        {
                                 for(var i=0;i<=7;i++)
                        {
                            for(var j=0;j<=2;j++)
                                {       
                                     if(todo.values[todo.solution[i][j]] == 0)
                                        break;
                                       else if(todo.values[todo.solution[i][j]] == 1)
                                         { 
                                             for(var k=1;k<=2;k++)
                                             {
                                                 if(todo.values[todo.solution[i][k]]==1)
                                                   { decision_x = true; }
                                                 else
                                                      {decision_x = false;break; }
                                         } if(decision_x == true)
                                                { todo.player1++; todo.gameOver(todo.player1_name);}
                                           
                                            break;
                                         }
                                     else if(todo.values[todo.solution[i][j]] == -1)
                                         {

                                             for(var k=1;k<=2;k++)
                                             {       
                                                 if(todo.values[todo.solution[i][k]] == -1)
                                                     decision_o = true;
                                                 else
                                                     {decision_o= false;break;}
                                             }if(decision_o == true)
                                                { todo.player2++; todo.gameOver(todo.player2_name);}
                                              break;
                                         }    
                                }
                        }
                        count = 0;
                        for(var i=0;i<9;i++)
                        {
                            if(todo.values[i] == 0)
                                count++;
                            
                        }
                        console.log(count);
                         if(count == 0)
                                todo.gameOver("");
                                
                        
                    }

todo.gameOver = function(t)
            {
                    
                    
                     $timeout(function(){ todo.over =1; },350);
                     if(t)
                        { todo.winningPlayer = t; todo.result = true;}
            }





}


