function somme() {
    var i;
    var sum = 0;
    for(i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
   
  var a = 12;
  var b = 34;
  var c = 56;
  var d = 78;
  var e = 90;
   
  document.writeln("Variables définies:");
  document.writeln("-------------------");
  document.writeln("a = "+a);
  document.writeln("b = "+b);
  document.writeln("c = "+c);
  document.writeln("d = "+d);
  document.writeln("e = "+e);
  document.writeln("")
   
  document.writeln("Additions:");
  document.writeln("----------");
  document.writeln("Somme de a ("+a+"), b ("+b+") et c ("+c+")                 : sumAll(a, b, c)       => "+somme(a, b, c));
  document.writeln("Somme de b ("+b+") et d ("+d+")                         : sumAll(b, d)          => "+somme(b, d));
  document.writeln("Somme de a ("+a+"), b ("+b+"), c ("+c+"), d ("+d+") et e ("+e+") : sumAll(a, b, c, d, e) => "+somme(a, b, c, d, e));
  document.writeln("Somme d'aucun élément                             : sumAll()              => "+somme());