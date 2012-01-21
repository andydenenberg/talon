class Site < ActiveRecord::Base
  has_many :time_logs
  
  def ok
    ok = Site.where(:status => 'SERVER_OK').length
  end

  def warning
    warning = Site.where(:status => 'WARNING').length
  end

  def unable
    unable_to_connect = Site.where(:status => 'UNABLE_TO_CONNECT').length
  end

end


